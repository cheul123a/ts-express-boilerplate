import Joi from "joi";

const validateRoot = {
    query: Joi.object().keys({
        good: Joi.string().length(10)
    })
}





export {
    validateRoot
}