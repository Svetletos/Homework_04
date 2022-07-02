alert('Здравейте, моля отговорете на следните въпроси');

//Функционалност 1

const requiredQuestion ={
    NUMBER_PANS             :"Колко тигана има в кухнята?",
    NUMBER_POTS             :"Колко тенджери има в кухнята?",
    KITCHEN_DIM_W           :"Колко сантиметра е широка кухнята?",
    KITCHEN_DIM_L           :"Колко сантиметра е дълга кухнята?",
    KITCHEN_DIM_H           :"Кокло сантриметра е висока кухнята?",
    CHEF_NAME               :"Как се казва главният готвач?",
    NUMBER_COOKS            :"Колко готвачи работят в кухнята?",
    NUMBER_WEITERS          :"Колко сервитьори работят в ресторанта?",
    SOUS_CHEF_NAME          :"Как се казва отговорника за сосове?",
    KITCHEN_MIN_TEMPERATURE :"Каква е минималната температура в кухнята?",
    KITCHEN_MAX_TEMPERATURE :"Каква е максималната температура в кухнята?",
    BANK_BALANCE            :"Колко парички имате в банката?",
    DAILY_TURNOVER          :"Колко парички е дневният оборот на ресторанта Ви?",
    OPENING_TIME            :"В колко часа отваряте?",
    CLOSING_TIME            :"В колко часа затваряте?"
}

let numberPans             = prompt(requiredQuestion.NUMBER_PANS);
let numberPots             = prompt(requiredQuestion.NUMBER_POTS);
let kitchenDimWidth        = prompt(requiredQuestion.KITCHEN_DIM_W);
let kitchenDimLenght       = prompt(requiredQuestion.KITCHEN_DIM_L);
let kitchenDimHeight       = prompt(requiredQuestion.KITCHEN_DIM_H);
let chefName               = prompt(requiredQuestion.CHEF_NAME);
let numberCooks            = prompt(requiredQuestion.NUMBER_COOKS);
let numberWeiters          = prompt(requiredQuestion.NUMBER_WEITERS);
let sousChefName           = prompt(requiredQuestion.SOUS_CHEF_NAME);
let kitchenMinTemperature  = prompt(requiredQuestion.KITCHEN_MIN_TEMPERATURE);
let kitchenMaxTemperature  = prompt(requiredQuestion.KITCHEN_MAX_TEMPERATURE);
let bankBalance            = prompt(requiredQuestion.BANK_BALANCE);
let dailyTurnover          = prompt(requiredQuestion.DAILY_TURNOVER);
let openingTime            = prompt(requiredQuestion.OPENING_TIME);
let closingTime            = prompt (requiredQuestion.CLOSING_TIME);

let fullRequiredAnswered   = numberPans && numberPots && kitchenDimWidth && kitchenDimLenght && kitchenDimHeight 
                             && chefName && numberCooks && numberWeiters && sousChefName && kitchenMinTemperature 
                             && kitchenMaxTemperature && bankBalance && dailyTurnover && openingTime && closingTime;
let kitchenStaff = numberCooks + numberWeiters; 
let kitchenSize  = kitchenDimWidth * kitchenDimLenght;
let kitchenM3    = kitchenDimHeight * kitchenDimLenght * kitchenDimWidth;
let kitMoney     = bankBalance + dailyTurnover;

while (fullRequiredAnswered == false){

    numberPans             = prompt(requiredQuestion.NUMBER_PANS);
    numberPots             = prompt(requiredQuestion.NUMBER_POTS);
    kitchenDimWidth        = prompt(requiredQuestion.KITCHEN_DIM_W);
    kitchenDimLenght       = prompt(requiredQuestion.KITCHEN_DIM_L);
    kitchenDimHeight       = prompt(requiredQuestion.KITCHEN_DIM_H);
    chefName               = prompt(requiredQuestion.CHEF_NAME);
    numberCooks            = prompt(requiredQuestion.NUMBER_COOKS);
    numberWeiters          = prompt(requiredQuestion.NUMBER_WEITERS);
    sousChefName           = prompt(requiredQuestion.SOUS_CHEF_NAME);
    kitchenMinTemperature  = prompt(requiredQuestion.KITCHEN_MIN_TEMPERATURE);
    kitchenMaxTemperature  = prompt(requiredQuestion.KITCHEN_MAX_TEMPERATURE);
    bankBalance            = prompt(requiredQuestion.BANK_BALANCE);
    dailyTurnover          = prompt(requiredQuestion.DAILY_TURNOVER);
    openingTime            = prompt(requiredQuestion.OPENING_TIME);
    closingTime            = prompt (requiredQuestion.CLOSING_TIME);

    if (numberPans && numberPots && kitchenDimWidth && kitchenDimLenght && kitchenDimHeight 
        && chefName && numberCooks && numberWeiters && sousChefName && kitchenMinTemperature 
        && kitchenMaxTemperature && bankBalance && dailyTurnover && openingTime && closingTime) {
    fullRequiredAnswered = true
        }
    else {
        alert ('Има непопълнени въпроси. Моля, отговорете на всички въпроси');
        continue
}
}

const additionalQuestions ={
    HAVE_A_FRIDGE       :"Разполагате ли с хладилник?",
    HAVE_A_GAS_STOVE    :"Разполагате ли с газов котлон?",
    HAVE_A_CONV_OVEN    :"Разполагате ли с конвектомат?",
    HAVE_A_ELEC_GRILL   :"Разполагате ли с електрическа скара?",
    HAVE_A_ASPIRATION   :"Разполагате ли с аспиратор?"
}

let haveFridge      
let haveGasStove    
let haveConvOven    
let haveElecGrill   
let haveAspiration  
let haveFridgeY
let haveFridgeN
let haveGasStoveY
let haveGasStoveN
let haveConvOvenY
let haveConvOvenN
let haveElecGrillY
let haveElecGrillN
let haveAspirationY
let haveAspirationN

let addQuestion = prompt('Желаете ли да отговорите на 5 (пет) опционални въпроса? - да/не');

if(addQuestion =='да'){
    haveFridge = prompt(additionalQuestions.HAVE_A_FRIDGE);
    haveFridgeY = 'да';
    haveFridgeN = 'не';
    numberOfGasStove = prompt(additionalQuestions.HAVE_A_GAS_STOVE);
    haveGasStoveY = 'да';
    haveGasStoveN = 'не';
    haveConvOven = prompt(additionalQuestions.HAVE_A_CONV_OVEN);
    haveConvOvenY = 'да';
    haveConvOvenN = 'не';
    haveElecGrill = prompt(additionalQuestions.HAVE_A_ELEC_GRILL);
    haveElecGrillY = 'да';
    haveElecGrillN = 'не';
    haveAspiration = prompt(additionalQuestions.HAVE_A_ASPIRATION);
    haveAspirationY = 'да';
    haveAspirationN = 'не';
alert ('Всички въпроси са зададени.');
}
else {
    addQuestion =='не';
alert('Благодарим за участието!');
}

//Функционалност 2

const alertMessages ={
    POSITIVE :'Поръчката Ви се изпълнява, моля изчакайте!',
    NEGATIVE :'Ресторантът не може да изпълни вашата поръчка, започваме процедура по самоунищожение. Благодаря ви, че хапнахте при нас!',
    WAITING  :'Вашата поръчка е взема, моля изчакайте!'
}

alert('Разполагаме с три ястия за деня!');

let selectDish = prompt ('Моля, изберете един от следните варианти, като посочите само номера на избраното от Вас ястие: 1 - Месно ястие; 2 - Вегетарианско ястие; 3 - Десерт');

//Функционалност 2.1

if (selectDish == '1'){
    let portionType = prompt ('Изберете грамаж на месното ястие, като посочите само номера на избраната от Вас порция: 1 - малка порция (450 гр.), 2 - средна порция (750 гр.), 3 - голяма порция (950 гр.).');
    let cookChoise = prompt ('Моля, изберете степен на приготвяне - rare, medium, welldone!');
    
if (cookChoise == 'rare'){
    let rareCookedMeat = haveGasStoveN && haveElecGrillY && haveAspirationY && (portionType == '1') && (kitchenMinTemperature >= 36) && (kitchenMaxTemperature <=48);
alert (alertMessages.WAITING);    
alert (alertMessages.POSITIVE);
}

if (cookChoise == 'medium'){
    let mediumCookedMeat = (haveConvOvenY || kitchenStaff == 5 || (portionType == '2') || (chefName = 'иван'));
alert (alertMessages.WAITING);
alert (alertMessages.POSITIVE);
}

if (cookChoise == 'welldone'){
    let welldoneCookedMeat = (((closingTime = '22' || '22:00') || (sousChefName = 'петър' || 'радо') && (kitchenSize == 45) || ((numberPans == 3) ||(numberPots == 2))));
alert (alertMessages.WAITING);
alert (alertMessages.POSITIVE);
}
else {
    alert (alertMessages.NEGATIVE);
    }
}

//Функционалност 2.2

if (selectDish == '2'){
    let vegyType = prompt ('Моля, изберете един от следните варианти: 1 - Вегетарианско, 2 - Веганско, 3 - Пескатерианско');
if (vegyType == '1' || 'вегетарианско'){
    let vegeterianCooked = vegeterianDish && haveConvOvenN && haveElecGrillN && haveAspirationN
alert (alertMessages.WAITING);
alert (alertMessages.POSITIVE);
}
if (vegyType == '2' || 'веган'){
    let veganCooked = veganDish && haveFridgeY && (numberCooks >=3 && numberCooks <=11) && (numberWeiters !=7) && (chefName = 'манол');
alert (alertMessages.WAITING);
alert (alertMessages.POSITIVE);
}
if (vegyType == '3' || 'пескатерианско'){
    let pesDishCooked = pesDish && (haveElecGrillY || addQuestion == 'да') && (kitchenM3 <=13 || kitMoney <= 158000);
alert (alertMessages.WAITING);
alert (alertMessages.POSITIVE);
}
else {
alert(alertMessages.NEGATIVE);
}
}
//Функционалност 2.3

if (selectDish == '3'){
    let dessertType = prompt('Какъв десерт желаете: 1 - Торта, 2 - Сладолед?');
    let sugarQuestion = prompt ('Пристрастени ли сте към захарта? да/не');
    let sugarQuestionY = sugarQuestion =='да';

if (dessertType == '1' || 'торта') {
    let makeCake = (haveFridgeY && haveAspirationN && (closingTime == 19) && (kitMoney >=15000 && kitMoney <=50000)) || (chefName = 'румен');
alert (alertMessages.WAITING);
alert (alertMessages.POSITIVE);
}
   
if (dessertType == '2' || 'сладолед'){
        let tasteOfIceCream = prompt ('Моля, изберете желан вкус: ягода, банан, ванилия');
        let makeIceCream = (!sugarQuestionY) || (tasteOfIceCream = 'ягода');
alert (alertMessages.WAITING);
alert (alertMessages.POSITIVE);
}
else {
        alert(alertMessages.NEGATIVE);
}
}