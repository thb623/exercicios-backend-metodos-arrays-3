const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
  ];

  const maiorString = cidades.reduce((acc, curr)=>{
    if(curr.length > acc.length){
        return curr
    }else{
        return acc
    }
  })
  console.log(maiorString)