const { RELATION_HOSPITAL, RELATION_PSYCHIATRIST, RELATION_PATIENT } = require("../../constants");

const getUser = async(dbConnection,options={})=>{
        const {email,user_type} = options;
        let params = [];
        let base_query = `SELECT password,${user_type}_id FROM ${user_type} WHERE ${user_type}.email = ? `;
        params = [email];
        let data = await dbConnection.query(base_query,params);
        if(data && data.length>0) return data[0];
        return null;
}

const listingByHospitalByID = async (dbConnection,options={})=>{
        const {hospital_id} = options;
        let base_query = `SELECT 
        ${RELATION_HOSPITAL}.name,
        COALESCE(SUM(${RELATION_PSYCHIATRIST}.patient_count),0) as total_patients,
        COUNT(${RELATION_PSYCHIATRIST}.psychiatrist_id) AS psychiatrist_count,
        IF(COUNT(${RELATION_PSYCHIATRIST}.psychiatrist_id) = 0,json_array(),json_arrayagg(json_object(
                "psychiatrist_id",${RELATION_PSYCHIATRIST}.psychiatrist_id,
                "psychiatrist_name",${RELATION_PSYCHIATRIST}.name,
                "psychiatrist_mail",${RELATION_PSYCHIATRIST}.email,
                "psychiatrist_photo",${RELATION_PSYCHIATRIST}.photo,
                "patient_count",${RELATION_PSYCHIATRIST}.patient_count,
                "patients",${RELATION_PSYCHIATRIST}.pa_json
        ))) AS psychiatrists
        FROM ${RELATION_HOSPITAL}
        LEFT JOIN (
                SELECT COUNT(${RELATION_PATIENT}.patient_id) AS patient_count,
                IF(COUNT(${RELATION_PATIENT}.patient_id) = 0,json_array(),
                json_arrayagg(
                        json_object(
                                "patient_id",${RELATION_PATIENT}.patient_id,
			        "patient_name",${RELATION_PATIENT}.name,
                                "patient_address",${RELATION_PATIENT}.address,
                                "patient_email",${RELATION_PATIENT}.email,
                                "patient_mobile",coalesce(${RELATION_PATIENT}.mobile,""),
                                "patient_image",${RELATION_PATIENT}.photo
                ))) pa_json,
                ${RELATION_PSYCHIATRIST}.*
                FROM ${RELATION_PSYCHIATRIST}
                LEFT JOIN ${RELATION_PATIENT} 
                ON ${RELATION_PSYCHIATRIST}.psychiatrist_id = ${RELATION_PATIENT}.psychiatrist_id
                GROUP BY ${RELATION_PSYCHIATRIST}.psychiatrist_id
        ) 
        AS ${RELATION_PSYCHIATRIST}
        ON ${RELATION_PSYCHIATRIST}.hospital_id = ${RELATION_HOSPITAL}.hospital_id 
        GROUP BY ${RELATION_HOSPITAL}.hospital_id
        HAVING ${RELATION_HOSPITAL}.hospital_id = ?`;
        return await dbConnection.query(base_query,[hospital_id]);      
}
module.exports = {getUser,listingByHospitalByID};