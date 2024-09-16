import { CodeI } from "./Code"

export interface CreateCodeI extends Omit<CodeI,"createdAt"|"updatedAt"|"id"> {

}