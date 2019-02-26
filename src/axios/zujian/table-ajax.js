import axios from 'axios';
export const getTableData = function(params,sucess,fail){
    axios.get('/src/localData/zujian/tableData.json', {
        params: params
      })
      .then(function (response) {
         if(sucess){
            sucess(response);
         }
      })
      .catch(function (error) {
        if(fail){
            fail(error);
         }
      });
}