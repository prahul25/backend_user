const { data } = require("../data.json");

const getUserData = (req, res) => {
  res.json(data);
};

const getUserDataByUiid = (req, res) => {
  let {uuid} = req.params;
  // for (let value of data) {
  //   if (value.login.uuid == uuid) {
  //     console.log(req.params.uuid);
  //     return res.status(200).json(value);
  //   }
  // }
  const  user = data.find(user => user.login.uuid === uuid);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  } else {
    return res.status(200).json(user);
  }
};

const getUserDataByFilter = (req, res) => {
    const {gender,age} = req.query

    console.log(gender , age)
    if(gender && age){
      const result = data.filter((user) => user.gender === gender && Number(user.dob.age) >= Number(age))
      res.json(result)
    }else if(gender){
      const result = data.filter((user) => user.gender === gender )
      res.json(result)
    }else if(age){
      const result= data.filter((user) => Number(user.dob.age) >= Number(age))
      res.json(result)
    }else{
      res.status(400).send('Bad request')
    }
};

module.exports = {
  getUserData,
  getUserDataByUiid,
  getUserDataByFilter,
};
