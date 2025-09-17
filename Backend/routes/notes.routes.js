import { Router } from "express";
import { ADDNOTE } from "../controller/notes.controller.js";

export const notesRouter = Router();

notesRouter.post('/addnote',ADDNOTE);