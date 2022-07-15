if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    DocumentFragment.addImage(dogHappy);
}

function readStock(data){
    foodS=data.val();
}

function writeStock() {

    database.ref('/').update({
        Food:x
    })
}