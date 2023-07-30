import express from "express";
import axios from "axios";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
const API_URL = "https://dog.ceo/api/breeds/image/random";

app.get("/", async (req, res) => {
    try {
      const response = await axios.get(API_URL);
      const result1 = response.data.message;
      const result2= response.data.status;
      res.render("index.ejs", { 
        randomImg:  result1,
        statuss: result2
     });
    } catch (error) {
      console.error("Failed to make request:", error.message);
      res.render("index.ejs", {
        error: error.message,
      });
    }
  });

  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });