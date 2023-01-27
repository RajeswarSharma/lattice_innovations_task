const getUser = async(dbConnection,options={})=>{
        const {email,user_type} = options;
        let params = [];
        let base_query = `SELECT password,${user_type}_id FROM ${user_type} WHERE ${user_type}.email = ? `;
        params = [email];
        let data = await dbConnection.query(base_query,params);
        if(data && data.length>0) return data[0];
        return null;
}

module.exports = {getUser};