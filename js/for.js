//map reduce filter
var animals = [
  {
      "name": "cat","size": "small","weight": 5},
  {
      "name": "dog","size": "small","weight": 10
  },
  {
      "name": "lion","size": "medium","weight": 150
  },
  {
      "name": "elephant","size": "big","weight": 5000
  }
]
//查找所有动物的名字
  //for
var animals_name = [];
for(var i=0;i<animals.length;i++){
  animals_name.push(animals[i].name)
}
//console.log('forName:',animals_name)

  //map
var animals_name=animals.map((item)=>{
  return item.name
})
//console.log('mapName',animals_name)

//筛选体重小于150的动物
  //for
var animals_name = [];
for(var i=0;i<animals.length;i++){
  if(animals[i].size === 'small'){
    animals_name.push(animals[i].name)
  }
}
//console.log('sName',animals_name)
  //filter
var animals_name = animals.filter((animal)=>{
  return animal.size === 'small'
}).map((animal)=>{
  return animal.name
})
console.log(animals_name)