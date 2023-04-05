const express = require("express");
const app = express();
const port = 3000;
const joi = require("joi");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
app.post("/api/products", (request, response, next) => {
  //{ name , price , discount , description}

  const productValidationSchema = joi.object({
    name: joi.string().required(),
    price: joi.number().required().min(1),
    discount: joi.number().required().min(0).max(100),
    description: joi.string().required().min(50),
    mobile: joi.string().regex(/[0-9]/),
    specifications: joi.array().items(
      joi.object({
        key: joi.string().required(),
        value: joi.string().required(),
      })
    ),
  });

  const { error, value } = productValidationSchema.validate(request.body, {
    abortEarly: false,
  });

  if (error) {
    return response.status(400).json(error);
  }

  response.json({
    message: "success",
  });
});
