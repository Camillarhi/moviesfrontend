import * as Yup from 'yup';

function configureValidations(){
    Yup.addMethod(Yup.string, "firstLetterUppercase", function(): Yup.StringSchema<string | undefined, Record<string, any>, string | undefined>{
        return this.test("firstLetterUppercase", 
        "First Letter Must Be Uppercase", function (value){
            if (value && value.length > 0){
                const firstLetter = value.substring(0, 1);
                return firstLetter===firstLetter.toUpperCase();
            }
            return true;
        })
    })
}

export default configureValidations;