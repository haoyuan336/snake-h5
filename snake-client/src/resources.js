import defines from'./game-defines.js'
const res =
{
  "background_3": "ui/background_3.png", 
  "bq04": "ui/bq04.png", 
  "bq05": "ui/bq05.png", 
  "direction_1": "ui/direction_1.png", 
  "direction_2": "ui/direction_2.png"
}
 for (let i in res) {res[i] = defines.resPath+res[i];}
 export default res