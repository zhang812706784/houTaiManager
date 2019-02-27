import axios from 'axios';
export const getTableData = function(params,success,fail){
    var params = Object.assign({
      randomDate: new Date().getTime()
    },params);
    axios.get('/static/tableData.json',{
            params : params
         }
      )
      .then(function (response) {
         if(success && typeof success == "function"){
            success(response);
         }
      })
      .catch(function (error) {
        if(fail && typeof fail == "function"){
            fail(error);
         }
      });
}