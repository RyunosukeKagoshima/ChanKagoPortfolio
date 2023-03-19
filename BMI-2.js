class BMI{
    constructor(height=0,weight=0){
        this.height=height;
        this.weight=weight;
    }

    getBMI(){
        let bmi = this.weight/Math.pow(this.height/100,2);
        bmi = bmi*10;
        bmi = Math.round(bmi);
        bmi = bmi/10;

        return bmi
    }

    getadvice(){
        let bmi = this.weight/Math.pow(this.height/100,2);
        bmi = Math.round(bmi)

        let idealweight = 22*Math.pow(this.height/100,2);
        idealweight = Math.round(idealweight);

        let advicemessage = "理想の体重です、この調子で体重を維持しましょう"
        if(bmi>22){
            advicemessage = "太っています、理想の体重は"+idealweight+"kg";   
        }else if (bmi<22){
            advicemessage = "痩せています、理想の体重は"+idealweight+"kg";
        }
        return advicemessage;

    }}
