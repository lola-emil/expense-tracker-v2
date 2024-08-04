import Validator from "validatorjs";
import { Category } from "../models/category.model";


export const addCategoryRules = {
    category_name: "required"
};


export async function validateCategory(data: Category) {
    const validation = new Validator(data, addCategoryRules);
    if (validation.fails())
        return validation.errors.all();

    return null;
}