import openaiRoutes from "./routes/openaiRoutes.mjs";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import reviewRoutes from "./routes/reviewRoutes.mjs";

// Wczytaj zmienne środowiskowe z .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Trasa do opinii
app.use("/api/reviews", reviewRoutes);
app.use("/api/openai", openaiRoutes);

// Połączenie z MongoDB i uruchomienie serwera
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Połączono z MongoDB");
    app.listen(PORT, () => {
      console.log(`Serwer działa na porcie ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Błąd połączenia z MongoDB:", err);
  });
