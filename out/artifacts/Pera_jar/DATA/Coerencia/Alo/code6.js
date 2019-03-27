gdjs.ex5Code = {};
gdjs.ex5Code.GD1Objects1_1final = [];

gdjs.ex5Code.GD2Objects1_1final = [];

gdjs.ex5Code.GD3Objects1_1final = [];

gdjs.ex5Code.GD4Objects1_1final = [];

gdjs.ex5Code.GDperaObjects1= [];
gdjs.ex5Code.GDperaObjects2= [];
gdjs.ex5Code.GDbackButtonObjects1= [];
gdjs.ex5Code.GDbackButtonObjects2= [];
gdjs.ex5Code.GDforwardButtonObjects1= [];
gdjs.ex5Code.GDforwardButtonObjects2= [];
gdjs.ex5Code.GDtextoObjects1= [];
gdjs.ex5Code.GDtextoObjects2= [];
gdjs.ex5Code.GDvoltarAtivObjects1= [];
gdjs.ex5Code.GDvoltarAtivObjects2= [];
gdjs.ex5Code.GDvoltarAoTxtObjects1= [];
gdjs.ex5Code.GDvoltarAoTxtObjects2= [];
gdjs.ex5Code.GDperaSaysObjects1= [];
gdjs.ex5Code.GDperaSaysObjects2= [];
gdjs.ex5Code.GDtelaObjects1= [];
gdjs.ex5Code.GDtelaObjects2= [];
gdjs.ex5Code.GD1Objects1= [];
gdjs.ex5Code.GD1Objects2= [];
gdjs.ex5Code.GD2Objects1= [];
gdjs.ex5Code.GD2Objects2= [];
gdjs.ex5Code.GD3Objects1= [];
gdjs.ex5Code.GD3Objects2= [];
gdjs.ex5Code.GD4Objects1= [];
gdjs.ex5Code.GD4Objects2= [];
gdjs.ex5Code.GDfieldObjects1= [];
gdjs.ex5Code.GDfieldObjects2= [];

gdjs.ex5Code.conditionTrue_0 = {val:false};
gdjs.ex5Code.condition0IsTrue_0 = {val:false};
gdjs.ex5Code.condition1IsTrue_0 = {val:false};
gdjs.ex5Code.condition2IsTrue_0 = {val:false};
gdjs.ex5Code.condition3IsTrue_0 = {val:false};
gdjs.ex5Code.condition4IsTrue_0 = {val:false};
gdjs.ex5Code.conditionTrue_1 = {val:false};
gdjs.ex5Code.condition0IsTrue_1 = {val:false};
gdjs.ex5Code.condition1IsTrue_1 = {val:false};
gdjs.ex5Code.condition2IsTrue_1 = {val:false};
gdjs.ex5Code.condition3IsTrue_1 = {val:false};
gdjs.ex5Code.condition4IsTrue_1 = {val:false};


gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDvoltarAtivObjects1Objects = Hashtable.newFrom({"voltarAtiv": gdjs.ex5Code.GDvoltarAtivObjects1});gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDvoltarAoTxtObjects1Objects = Hashtable.newFrom({"voltarAoTxt": gdjs.ex5Code.GDvoltarAoTxtObjects1});gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.ex5Code.GDforwardButtonObjects1});gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDforwardButtonObjects1Objects = Hashtable.newFrom({"forwardButton": gdjs.ex5Code.GDforwardButtonObjects1});gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.ex5Code.GDbackButtonObjects1});gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDbackButtonObjects1Objects = Hashtable.newFrom({"backButton": gdjs.ex5Code.GDbackButtonObjects1});gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDvoltarAtivObjects1Objects = Hashtable.newFrom({"voltarAtiv": gdjs.ex5Code.GDvoltarAtivObjects1});gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDvoltarAoTxtObjects1Objects = Hashtable.newFrom({"voltarAoTxt": gdjs.ex5Code.GDvoltarAoTxtObjects1});gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GD1Objects2Objects = Hashtable.newFrom({"1": gdjs.ex5Code.GD1Objects2});gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GD2Objects2Objects = Hashtable.newFrom({"2": gdjs.ex5Code.GD2Objects2});gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GD3Objects2Objects = Hashtable.newFrom({"3": gdjs.ex5Code.GD3Objects2});gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GD4Objects2Objects = Hashtable.newFrom({"4": gdjs.ex5Code.GD4Objects2});gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GD2Objects1Objects = Hashtable.newFrom({"2": gdjs.ex5Code.GD2Objects1});gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDfieldObjects1Objects = Hashtable.newFrom({"field": gdjs.ex5Code.GDfieldObjects1});gdjs.ex5Code.eventsList0xb25a8 = function(runtimeScene) {

{

gdjs.ex5Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));

gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDvoltarAtivObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
gdjs.ex5Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().get("isText")) == 1;
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.ex5Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.ex5Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
gdjs.ex5Code.GDvoltarAoTxtObjects1.createFrom(runtimeScene.getObjects("voltarAoTxt"));
/* Reuse gdjs.ex5Code.GDvoltarAtivObjects1 */
{for(var i = 0, len = gdjs.ex5Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDvoltarAtivObjects1[i].setPosition(395,785);
}
}{for(var i = 0, len = gdjs.ex5Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDtextoObjects1[i].setPosition(-(1000),-(1000));
}
}{for(var i = 0, len = gdjs.ex5Code.GDvoltarAoTxtObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDvoltarAoTxtObjects1[i].setPosition(-(9),619);
}
}{for(var i = 0, len = gdjs.ex5Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDforwardButtonObjects1[i].setPosition(-(1000),608);
}
}{for(var i = 0, len = gdjs.ex5Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDbackButtonObjects1[i].setPosition(-(1000),608);
}
}{runtimeScene.getVariables().get("isText").setNumber(0);
}}

}


{

gdjs.ex5Code.GDvoltarAoTxtObjects1.createFrom(runtimeScene.getObjects("voltarAoTxt"));

gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDvoltarAoTxtObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.ex5Code.condition1IsTrue_0.val) {
gdjs.ex5Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.ex5Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.ex5Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
/* Reuse gdjs.ex5Code.GDvoltarAoTxtObjects1 */
gdjs.ex5Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));
{for(var i = 0, len = gdjs.ex5Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDtextoObjects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.ex5Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDforwardButtonObjects1[i].setPosition(832,608);
}
}{for(var i = 0, len = gdjs.ex5Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDbackButtonObjects1[i].setPosition(33,608);
}
}{for(var i = 0, len = gdjs.ex5Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDvoltarAtivObjects1[i].setPosition(384,640);
}
}{for(var i = 0, len = gdjs.ex5Code.GDvoltarAoTxtObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDvoltarAoTxtObjects1[i].setPosition(-(1000),672);
}
}}

}


{

gdjs.ex5Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.ex5Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
gdjs.ex5Code.condition3IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ex5Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.ex5Code.GDtextoObjects1[i].getAnimation() != 4 ) {
        gdjs.ex5Code.condition2IsTrue_0.val = true;
        gdjs.ex5Code.GDtextoObjects1[k] = gdjs.ex5Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.ex5Code.GDtextoObjects1.length = k;}if ( gdjs.ex5Code.condition2IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition3IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7455292);
}
}}
}
}
if (gdjs.ex5Code.condition3IsTrue_0.val) {
/* Reuse gdjs.ex5Code.GDforwardButtonObjects1 */
/* Reuse gdjs.ex5Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.ex5Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDtextoObjects1[i].setAnimation(gdjs.ex5Code.GDtextoObjects1[i].getAnimation() + (1));
}
}{for(var i = 0, len = gdjs.ex5Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDforwardButtonObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.ex5Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));

gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDforwardButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.ex5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.ex5Code.GDforwardButtonObjects1 */
{for(var i = 0, len = gdjs.ex5Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDforwardButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.ex5Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.ex5Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));

gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
gdjs.ex5Code.condition3IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.ex5Code.GDtextoObjects1.length;i<l;++i) {
    if ( gdjs.ex5Code.GDtextoObjects1[i].getAnimation() != 0 ) {
        gdjs.ex5Code.condition2IsTrue_0.val = true;
        gdjs.ex5Code.GDtextoObjects1[k] = gdjs.ex5Code.GDtextoObjects1[i];
        ++k;
    }
}
gdjs.ex5Code.GDtextoObjects1.length = k;}if ( gdjs.ex5Code.condition2IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition3IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7457012);
}
}}
}
}
if (gdjs.ex5Code.condition3IsTrue_0.val) {
/* Reuse gdjs.ex5Code.GDbackButtonObjects1 */
/* Reuse gdjs.ex5Code.GDtextoObjects1 */
{for(var i = 0, len = gdjs.ex5Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDbackButtonObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.ex5Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDtextoObjects1[i].setAnimation(gdjs.ex5Code.GDtextoObjects1[i].getAnimation() - (1));
}
}}

}


{

gdjs.ex5Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));

gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDbackButtonObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.ex5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.ex5Code.GDbackButtonObjects1 */
{for(var i = 0, len = gdjs.ex5Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDbackButtonObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.ex5Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));

gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDvoltarAtivObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.ex5Code.condition1IsTrue_0.val) {
gdjs.ex5Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.ex5Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.ex5Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
gdjs.ex5Code.GDvoltarAoTxtObjects1.createFrom(runtimeScene.getObjects("voltarAoTxt"));
/* Reuse gdjs.ex5Code.GDvoltarAtivObjects1 */
{for(var i = 0, len = gdjs.ex5Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDvoltarAtivObjects1[i].setPosition(395,785);
}
}{for(var i = 0, len = gdjs.ex5Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDtextoObjects1[i].setPosition(-(1000),-(1000));
}
}{for(var i = 0, len = gdjs.ex5Code.GDvoltarAoTxtObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDvoltarAoTxtObjects1[i].setPosition(-(9),619);
}
}{for(var i = 0, len = gdjs.ex5Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDforwardButtonObjects1[i].setPosition(-(1000),608);
}
}{for(var i = 0, len = gdjs.ex5Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDbackButtonObjects1[i].setPosition(-(1000),608);
}
}}

}


{

gdjs.ex5Code.GDvoltarAoTxtObjects1.createFrom(runtimeScene.getObjects("voltarAoTxt"));

gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDvoltarAoTxtObjects1Objects, runtimeScene, true, false);
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.ex5Code.condition1IsTrue_0.val) {
gdjs.ex5Code.GDbackButtonObjects1.createFrom(runtimeScene.getObjects("backButton"));
gdjs.ex5Code.GDforwardButtonObjects1.createFrom(runtimeScene.getObjects("forwardButton"));
gdjs.ex5Code.GDtextoObjects1.createFrom(runtimeScene.getObjects("texto"));
/* Reuse gdjs.ex5Code.GDvoltarAoTxtObjects1 */
gdjs.ex5Code.GDvoltarAtivObjects1.createFrom(runtimeScene.getObjects("voltarAtiv"));
{for(var i = 0, len = gdjs.ex5Code.GDtextoObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDtextoObjects1[i].setPosition(0,0);
}
}{for(var i = 0, len = gdjs.ex5Code.GDforwardButtonObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDforwardButtonObjects1[i].setPosition(832,608);
}
}{for(var i = 0, len = gdjs.ex5Code.GDbackButtonObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDbackButtonObjects1[i].setPosition(33,608);
}
}{for(var i = 0, len = gdjs.ex5Code.GDvoltarAtivObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDvoltarAtivObjects1[i].setPosition(384,640);
}
}{for(var i = 0, len = gdjs.ex5Code.GDvoltarAoTxtObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDvoltarAoTxtObjects1[i].setPosition(-(1000),672);
}
}}

}


{

gdjs.ex5Code.GD1Objects1.length = 0;

gdjs.ex5Code.GD2Objects1.length = 0;

gdjs.ex5Code.GD3Objects1.length = 0;

gdjs.ex5Code.GD4Objects1.length = 0;


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition1IsTrue_0;
gdjs.ex5Code.GD1Objects1_1final.length = 0;gdjs.ex5Code.GD2Objects1_1final.length = 0;gdjs.ex5Code.GD3Objects1_1final.length = 0;gdjs.ex5Code.GD4Objects1_1final.length = 0;gdjs.ex5Code.condition0IsTrue_1.val = false;
gdjs.ex5Code.condition1IsTrue_1.val = false;
gdjs.ex5Code.condition2IsTrue_1.val = false;
gdjs.ex5Code.condition3IsTrue_1.val = false;
{
gdjs.ex5Code.GD1Objects2.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.condition0IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GD1Objects2Objects, runtimeScene, true, false);
if( gdjs.ex5Code.condition0IsTrue_1.val ) {
    gdjs.ex5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.ex5Code.GD1Objects2.length;j<jLen;++j) {
        if ( gdjs.ex5Code.GD1Objects1_1final.indexOf(gdjs.ex5Code.GD1Objects2[j]) === -1 )
            gdjs.ex5Code.GD1Objects1_1final.push(gdjs.ex5Code.GD1Objects2[j]);
    }
}
}
{
gdjs.ex5Code.GD2Objects2.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.condition1IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GD2Objects2Objects, runtimeScene, true, false);
if( gdjs.ex5Code.condition1IsTrue_1.val ) {
    gdjs.ex5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.ex5Code.GD2Objects2.length;j<jLen;++j) {
        if ( gdjs.ex5Code.GD2Objects1_1final.indexOf(gdjs.ex5Code.GD2Objects2[j]) === -1 )
            gdjs.ex5Code.GD2Objects1_1final.push(gdjs.ex5Code.GD2Objects2[j]);
    }
}
}
{
gdjs.ex5Code.GD3Objects2.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.condition2IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GD3Objects2Objects, runtimeScene, true, false);
if( gdjs.ex5Code.condition2IsTrue_1.val ) {
    gdjs.ex5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.ex5Code.GD3Objects2.length;j<jLen;++j) {
        if ( gdjs.ex5Code.GD3Objects1_1final.indexOf(gdjs.ex5Code.GD3Objects2[j]) === -1 )
            gdjs.ex5Code.GD3Objects1_1final.push(gdjs.ex5Code.GD3Objects2[j]);
    }
}
}
{
gdjs.ex5Code.GD4Objects2.createFrom(runtimeScene.getObjects("4"));
gdjs.ex5Code.condition3IsTrue_1.val = gdjs.evtTools.input.cursorOnObject(gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GD4Objects2Objects, runtimeScene, true, false);
if( gdjs.ex5Code.condition3IsTrue_1.val ) {
    gdjs.ex5Code.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.ex5Code.GD4Objects2.length;j<jLen;++j) {
        if ( gdjs.ex5Code.GD4Objects1_1final.indexOf(gdjs.ex5Code.GD4Objects2[j]) === -1 )
            gdjs.ex5Code.GD4Objects1_1final.push(gdjs.ex5Code.GD4Objects2[j]);
    }
}
}
{
gdjs.ex5Code.GD1Objects1.createFrom(gdjs.ex5Code.GD1Objects1_1final);
gdjs.ex5Code.GD2Objects1.createFrom(gdjs.ex5Code.GD2Objects1_1final);
gdjs.ex5Code.GD3Objects1.createFrom(gdjs.ex5Code.GD3Objects1_1final);
gdjs.ex5Code.GD4Objects1.createFrom(gdjs.ex5Code.GD4Objects1_1final);
}
}
}}
if (gdjs.ex5Code.condition1IsTrue_0.val) {
gdjs.ex5Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.ex5Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}{for(var i = 0, len = gdjs.ex5Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDperaObjects1[i].setAnimation(4);
}
}{for(var i = 0, len = gdjs.ex5Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDperaSaysObjects1[i].setAnimation(2);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "resetPera");
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "resetPera");
}if (gdjs.ex5Code.condition0IsTrue_0.val) {
gdjs.ex5Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.ex5Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDperaSaysObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.ex5Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().getFromIndex(0).setNumber(gdjs.random(23));
}{runtimeScene.getVariables().getFromIndex(1).setNumber(1);
}}

}


{

gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GDfieldObjects1.createFrom(runtimeScene.getObjects("field"));

gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GD2Objects1Objects, gdjs.ex5Code.mapOfGDgdjs_46ex5Code_46GDfieldObjects1Objects, false, runtimeScene, false);
}}
if (gdjs.ex5Code.condition1IsTrue_0.val) {
/* Reuse gdjs.ex5Code.GD2Objects1 */
gdjs.ex5Code.GDperaObjects1.createFrom(runtimeScene.getObjects("pera"));
gdjs.ex5Code.GDperaSaysObjects1.createFrom(runtimeScene.getObjects("peraSays"));
{for(var i = 0, len = gdjs.ex5Code.GDperaObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDperaObjects1[i].setAnimation(1);
}
}{for(var i = 0, len = gdjs.ex5Code.GDperaSaysObjects1.length ;i < len;++i) {
    gdjs.ex5Code.GDperaSaysObjects1[i].setAnimation(1);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "delayToNextScene");
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(312,200);
}
}{runtimeScene.getVariables().getFromIndex(2).setNumber(1);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 2, "delayToNextScene");
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(2)) == 1;
}}
if (gdjs.ex5Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "ex6", false);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 0;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7466564);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 1;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7468052);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,608);
}
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 2;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7469284);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 3;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7470772);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 4;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7472260);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 5;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7473748);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 6;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7475236);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 7;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7476724);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 8;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7478212);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 9;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7479700);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 10;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7481188);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 11;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7482676);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 12;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7484164);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 13;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7485652);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 14;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9262524);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 15;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7445292);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 16;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9489940);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 17;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7392628);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 18;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8568652);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 19;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9516356);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 20;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7353756);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 21;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6864388);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 22;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9276220);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


{


gdjs.ex5Code.condition0IsTrue_0.val = false;
gdjs.ex5Code.condition1IsTrue_0.val = false;
gdjs.ex5Code.condition2IsTrue_0.val = false;
{
gdjs.ex5Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(0)) == 23;
}if ( gdjs.ex5Code.condition0IsTrue_0.val ) {
{
gdjs.ex5Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getVariables().getFromIndex(1)) == 1;
}if ( gdjs.ex5Code.condition1IsTrue_0.val ) {
{
{gdjs.ex5Code.conditionTrue_1 = gdjs.ex5Code.condition2IsTrue_0;
gdjs.ex5Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7762932);
}
}}
}
if (gdjs.ex5Code.condition2IsTrue_0.val) {
gdjs.ex5Code.GD1Objects1.createFrom(runtimeScene.getObjects("1"));
gdjs.ex5Code.GD2Objects1.createFrom(runtimeScene.getObjects("2"));
gdjs.ex5Code.GD3Objects1.createFrom(runtimeScene.getObjects("3"));
gdjs.ex5Code.GD4Objects1.createFrom(runtimeScene.getObjects("4"));
{for(var i = 0, len = gdjs.ex5Code.GD4Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD4Objects1[i].setPosition(314,320);
}
}{for(var i = 0, len = gdjs.ex5Code.GD2Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD2Objects1[i].setPosition(314,416);
}
}{for(var i = 0, len = gdjs.ex5Code.GD1Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD1Objects1[i].setPosition(314,512);
}
}{for(var i = 0, len = gdjs.ex5Code.GD3Objects1.length ;i < len;++i) {
    gdjs.ex5Code.GD3Objects1[i].setPosition(314,608);
}
}{runtimeScene.getVariables().getFromIndex(1).setNumber(0);
}}

}


}; //End of gdjs.ex5Code.eventsList0xb25a8


gdjs.ex5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();
gdjs.ex5Code.GDperaObjects1.length = 0;
gdjs.ex5Code.GDperaObjects2.length = 0;
gdjs.ex5Code.GDbackButtonObjects1.length = 0;
gdjs.ex5Code.GDbackButtonObjects2.length = 0;
gdjs.ex5Code.GDforwardButtonObjects1.length = 0;
gdjs.ex5Code.GDforwardButtonObjects2.length = 0;
gdjs.ex5Code.GDtextoObjects1.length = 0;
gdjs.ex5Code.GDtextoObjects2.length = 0;
gdjs.ex5Code.GDvoltarAtivObjects1.length = 0;
gdjs.ex5Code.GDvoltarAtivObjects2.length = 0;
gdjs.ex5Code.GDvoltarAoTxtObjects1.length = 0;
gdjs.ex5Code.GDvoltarAoTxtObjects2.length = 0;
gdjs.ex5Code.GDperaSaysObjects1.length = 0;
gdjs.ex5Code.GDperaSaysObjects2.length = 0;
gdjs.ex5Code.GDtelaObjects1.length = 0;
gdjs.ex5Code.GDtelaObjects2.length = 0;
gdjs.ex5Code.GD1Objects1.length = 0;
gdjs.ex5Code.GD1Objects2.length = 0;
gdjs.ex5Code.GD2Objects1.length = 0;
gdjs.ex5Code.GD2Objects2.length = 0;
gdjs.ex5Code.GD3Objects1.length = 0;
gdjs.ex5Code.GD3Objects2.length = 0;
gdjs.ex5Code.GD4Objects1.length = 0;
gdjs.ex5Code.GD4Objects2.length = 0;
gdjs.ex5Code.GDfieldObjects1.length = 0;
gdjs.ex5Code.GDfieldObjects2.length = 0;

gdjs.ex5Code.eventsList0xb25a8(runtimeScene);
return;
}
gdjs['ex5Code'] = gdjs.ex5Code;
