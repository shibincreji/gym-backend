const express = require("express");

const router = express.Router();

const Customer = require("../models/customer.model");

router.post("/insert", async (req, res) => {
  const firstname = req.body.firstname;
  const lastname = req.body.lastname;
  const cusername = req.body.cusername;
  const contact = req.body.contact;
  const address = req.body.address;
  const gender = req.body.gender;
  const city = req.body.city;
  const password = req.body.password;

  const customer = new Customer({
    firstname: firstname,
    lastname: lastname,
    cusername: cusername,
    contact: contact,
    address: address,
    gender: gender,
    city: city,
    password: password,
  });
  try {
    await customer.save();
    console.log("Added to Database");
  } catch (err) {
    console.log(err);
  }
});

router.get("/read", async (req, res) => {
  Customer.find({}, (err, result) => {
    if (err) res.send(err);

    res.send(result);
  });
});

router.put("/update", async (req, res) => {
  const newfirstname = req.body.newfirstname;
  const newlastname = req.body.newlastname;
  const newcusername = req.body.newcusername;
  const newcontact = req.body.newcontact;
  const newaddress = req.body.newaddress;
  const newgender = req.body.newgender;
  const newcity = req.body.newcity;
  const newpassword = req.body.newpassword;
  const id = req.body.id;

  try {
    await Customer.findById(id, (err, updateditem) => {
      updateditem.firstname = newfirstname;
      updateditem.lastname = newlastname;
      updateditem.cusername = newcusername;
      updateditem.contact = newcontact;
      updateditem.address = newaddress;
      updateditem.gender = newgender;
      updateditem.city = newcity;
      updateditem.password = newpassword;
      updateditem.save();
      res.send("Updated.");
    });
  } catch (err) {
    console.log(err);
  }
});

router.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await Customer.findByIdAndRemove(id).exec();
  res.send("Deleted");
  console.log("Deleted from Database");
});
module.exports = router;
