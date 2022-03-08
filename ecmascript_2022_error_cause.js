/*****************************************************************************
                    ECMAScript 2022 Error cause
******************************************************************************/

let data = [{ 1: 'A' }, { 2: 'B' }, {}];

function processData(data) {
  return data.map(item => {
    try {
      const json = JSON.parse(item);
      return json;
    } catch (error) {

      throw new Error(
        `Processing failed`,
        { cause: error }
      );
    }
  })
}

try {
  console.log(processData(data));
} catch (error) {
  console.log('Error::', error)
  console.log('Error cause::', error.cause)
}
