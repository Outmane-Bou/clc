function insert(num){
    var mijn_str = document.form.textview.value;
    var lastChar = mijn_str[mijn_str.length - 1];
    if (mijn_str.length < 30){
        if (!isNaN(lastChar) || lastChar == null || !isNaN(num)){
            document.form.textview.value = mijn_str + num;
        }else if(num != lastChar){
            document.form.textview.value = mijn_str.replace(lastChar, num);
        }


    }
}
function eql(){
    var sum = document.form.textview.value;
    if (sum){
        document.form.textview.value = eval(sum);
    }
}
function clean(){
    document.form.textview.value = '';
}
function back(){
    var exp = document.form.textview.value;
    document.form.textview.value = exp.substring(0,exp.length - 1);
}

