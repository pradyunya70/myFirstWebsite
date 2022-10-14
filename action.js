function removeAll(s)
{
for(var i=s.options.length-1;i>=0;i--)
{
s.remove(i);
}
}
function val()
{
var s1=document.getElementById("s1");
var s2=document.getElementById("s2");
if(s1.options[s1.selectedIndex].value=="me" || "ce" ||"ee" || "cse" || "e")
{
var op4=document.createElement("option");
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");


op4.text="select";
op4.value="select";

op1.text="1st year";
op1.value="1st year";

op2.text="2nd year";
op2.value="2nd year";

op3.text="3rd year";
op3.value="3rd year";

removeAll(s2);
s2.options.add(op4);
s2.options.add(op1);
s2.options.add(op2);
s2.options.add(op3);
}
}



function val2()
{
var s2=document.getElementById("s2");
var s3=document.getElementById("s3");
if(s2.options[s2.selectedIndex].value=="1st year")
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");

op1.text="select";
op1.value="select";

op2.text="1st sem";
op2.value="1st sem";

op3.text="2nd sem";
op3.value="2nd sem";
removeAll(s3);
s3.options.add(op1);
s3.options.add(op2);
s3.options.add(op3);
}
if(s2.options[s2.selectedIndex].value=="2nd year")
{
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");

op6.text="select";
op6.value="select";

op4.text="3rd sem";
op4.value="3rd sem";

op5.text="4th sem";
op5.value="4th sem";
removeAll(s3);
s3.options.add(op6);
s3.options.add(op4);
s3.options.add(op5);
}
if(s2.options[s2.selectedIndex].value=="3rd year")
{
var op7=document.createElement("option");
var op8=document.createElement("option");
var op9=document.createElement("option");
op7.text="select";
op7.value="select";
op8.text="5th sem";
op8.value="5th sem";

op9.text="6th sem";
op9.value="6th sem";

removeAll(s3);
s3.options.add(op7);
s3.options.add(op8);
s3.options.add(op9);
}
}

function val3()
{

var s1=document.getElementById("s1");
var s2=document.getElementById("s2");
var s3=document.getElementById("s3");
var s4=document.getElementById("s4");
if((s1.options[s1.selectedIndex].value=="me"||"ce"||"ee"||"cse"||"e") &&(s2.options[s2.selectedIndex].value=="1st year") && (s3.options[s3.selectedIndex].value=="1st sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="English";
op2.value="English";

op3.text="Math";
op3.value="Math";

op4.text="Physics";
op4.value="physics";

op5.text="chemestry";
op5.value="chemestry";

op6.text="ICT";
op6.value="ICT";


removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
}
if((s1.options[s1.selectedIndex].value=="cse") &&(s2.options[s2.selectedIndex].value=="1st year") && (s3.options[s3.selectedIndex].value=="2nd sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Basic Electronics";
op2.value="Basic Electronics";

op3.text="Applied Mathematics";
op3.value="Applied Mathematics";

op4.text="Programming in C";
op4.value="Programming in C";

op5.text="Elements of Electrical Engg.";
op5.value="Elements of Electrical Engg.";

op6.text="Web page Design ";
op6.value="Web page Design";


removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
}


if((s1.options[s1.selectedIndex].value=="cse") &&(s2.options[s2.selectedIndex].value=="2nd year") && (s3.options[s3.selectedIndex].value=="3rd sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="OOP's Using C++";
op2.value="OOP's Using C++";

op3.text="Data structure using C";
op3.value="Data structure using C";

op4.text="Computer graphics";
op4.value="Computer Graphics";

op5.text="DBMS";
op5.value="DBMS";

op6.text="Digital electronics";
op6.value="Digital electronics";


removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
}
if((s1.options[s1.selectedIndex].value=="cse") &&(s2.options[s2.selectedIndex].value=="2nd year") && (s3.options[s3.selectedIndex].value=="4th sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Java programming";
op2.value="Java programming";

op3.text="Software Engg.";
op3.value="Software Engg.";

op4.text="Data communication and computer network";
op4.value="Data communication and computer network";

op5.text="Microprocessor";
op5.value="Microprocessor";

removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
}
if((s1.options[s1.selectedIndex].value=="cse") &&(s2.options[s2.selectedIndex].value=="3rd year") && (s3.options[s3.selectedIndex].value=="5th sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
var op7=document.createElement("option");
var op8=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Environmental studies";
op2.value="Environmental studies";

op3.text="Operating system";
op3.value="Operating system";

op4.text="Advanced java programming";
op4.value="Advanced java programming";

op5.text="Software testing";
op5.value="Software testing";

op6.text="Client side scripting";
op6.value="Client side scripting";

op7.text="Advanced computer network";
op7.value="Advanced computer network";

op8.text="Advanced DBMS";
op8.value="Advanced DBMS";

removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
s4.options.add(op7);
s4.options.add(op8);
}
if((s1.options[s1.selectedIndex].value=="cse") &&(s2.options[s2.selectedIndex].value=="3rd year") && (s3.options[s3.selectedIndex].value=="6th sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
op2.value="Emerging trend in information technology";

op3.text="Mobile android development";
op3.value="Mobile android development";

op4.text="Programming with python";
op4.value="Programming with python";

op5.text="Networking is computer technology";
op5.value="Networking is computer technology";

op6.text="Web development using PHP";
op6.value="Web development using PHP";


removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
}
if((s1.options[s1.selectedIndex].value=="me") &&(s2.options[s2.selectedIndex].value=="1st year") && (s3.options[s3.selectedIndex].value=="2nd sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Applied science";
op2.value="Applied science";

op3.text="Applied Mathematics";
op3.value="Applied Mathematics";

op4.text="Applied mechanics";
op4.value="Applied mechanics";

op5.text="Engineering drawing";
op5.value="Engineering drawing";


removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
}


if((s1.options[s1.selectedIndex].value=="me") &&(s2.options[s2.selectedIndex].value=="2nd year") && (s3.options[s3.selectedIndex].value=="3rd sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Strength of material";
op2.value="Strength of material";

op3.text="Basic electrical and electronic Engg.";
op3.value="Basic electrical and electronic Engg.";

op4.text="Thermal Engg.";
op4.value="Thermal Engg.";

op5.text="Mechanical-working-drawing";
op5.value="Mechanical-working-drawing";

op6.text="Engg. metrology";
op6.value="Engg. metrology";


removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
}
if((s1.options[s1.selectedIndex].value=="me") &&(s2.options[s2.selectedIndex].value=="2nd year") && (s3.options[s3.selectedIndex].value=="4th sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Theroy of machines";
op2.value="Theory of machine";

op3.text="Mechanical Engg. measurements";
op3.value="Mechanical Engg. measurements";

op4.text="Fluid mechanics and machinery";
op4.value="Fluid mechanics and machinery";

op5.text="Manufacturing processes";
op5.value="Manufacturing processes";

op6.text="Environmental studies";
op6.value="Environmental studies";
removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
}
if((s1.options[s1.selectedIndex].value=="me") &&(s2.options[s2.selectedIndex].value=="3rd year") && (s3.options[s3.selectedIndex].value=="5th sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
var op7=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Management";
op2.value="Management";

op3.text="Power Engg. and refrigeration";
op3.value="Power Engg. and refrigeration";

op4.text="Advanced manufacturing processes";
op4.value="Advanced manufacturing processes";

op5.text="Elements of machine design";
op5.value="Elements of machine design";

op6.text="Tool Engg.";
op6.value="Tool Engg.";

op7.text="Power plant Engg.";
op7.value="Power plant Engg";

removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
s4.options.add(op7);
}
if((s1.options[s1.selectedIndex].value=="me") &&(s2.options[s2.selectedIndex].value=="3rd year") && (s3.options[s3.selectedIndex].value=="6th sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Emerging trend in information technology";
op2.value="Emerging trend in information technology";

op3.text="Mobile android development";
op3.value="Mobile android development";

op4.text="Programming with python";
op4.value="Programming with python";

op5.text="Networking is computer technology";
op5.value="Networking is computer technology";

op6.text="Web development using PHP";
op6.value="Web development using PHP";


removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);

}
if((s1.options[s1.selectedIndex].value=="ce") &&(s2.options[s2.selectedIndex].value=="1st year") && (s3.options[s3.selectedIndex].value=="2nd sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Applied mechanics";
op2.value="Applied mechanics";

op3.text="Applied Mathematics";
op3.value="Applied Mathematics";

op4.text="Construction-material";
op4.value="Construction-material";

op5.text="Basic surveying";
op5.value="Basic surveying";


removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
}


if((s1.options[s1.selectedIndex].value=="ce") &&(s2.options[s2.selectedIndex].value=="2nd year") && (s3.options[s3.selectedIndex].value=="3rd sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Advanced surveying";
op2.value="Advanced surveying ";

op3.text="Highway Engg.";
op3.value="Highway Engg.";

op4.text="Mechanics of structures";
op4.value="Mechanics of structures";

op5.text="Building construction";
op5.value="Building construction";

op6.text="Concrete technology";
op6.value="Concrete technology";


removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
}
if((s1.options[s1.selectedIndex].value=="ce") &&(s2.options[s2.selectedIndex].value=="2nd year") && (s3.options[s3.selectedIndex].value=="4th sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Hydraulics";
op2.value="Hydraulics";

op3.text="Theory of structures";
op3.value="Theory of structures";

op4.text="Railway and bridge Engg.";
op4.value="Railway and bridge Engg.";

op5.text="Geotechnical Engg.";
op5.value="Geotechnical Engg.";

op6.text="Building planning and drawing";
op6.value="Building planning and drawing";
removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
}
if((s1.options[s1.selectedIndex].value=="ce") &&(s2.options[s2.selectedIndex].value=="3rd year") && (s3.options[s3.selectedIndex].value=="5th sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
var op7=document.createElement("option");
var op8=document.createElement("option");
var op9=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Water resources Engg.";
op2.value="Whater resources Engh.";

op3.text="Design of steel and rcc structures";
op3.value="Design of steel and rcc structures";

op4.text="Estimating and costing";
op4.value="Estimating and costing";

op5.text="Public health Engg.";
op5.value="Public health Engg.";

op6.text="Rular develement";
op6.value="Rular develement";

op7.text="Energy conservation and green building";
op7.value="Enery conservation and green building";

op8.text="Traffic Engg.";
op8.value="Traffic Engg.";

op9.text="Precast and prestressed concrete";
op9.value="Precast and prestressed concrete";
removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
s4.options.add(op7);
s4.options.add(op8);
s4.otpions.add(op9);
}
if((s1.options[s1.selectedIndex].value=="ce") &&(s2.options[s2.selectedIndex].value=="3rd year") && (s3.options[s3.selectedIndex].value=="6th sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Emerging trend in information technology";
op2.value="Emerging trend in information technology";

op3.text="Mobile android development";
op3.value="Mobile android development";

op4.text="Programming with python";
op4.value="Programming with python";

op5.text="Networking is computer technology";
op5.value="Networking is computer technology";

op6.text="Web development using PHP";
op6.value="Web development using PHP";


removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);

}
if((s1.options[s1.selectedIndex].value=="ee") &&(s2.options[s2.selectedIndex].value=="1st year") && (s3.options[s3.selectedIndex].value=="2nd sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Basic mechanical Engg.";
op2.value="Basic mechanical Engg.";

op3.text="Applied Mathematics";
op3.value="Applied Mathematics";

op4.text="Fundamental of electrical Engg.";
op4.value="Fundamental of Electrical Engg.";

op5.text="Elements of Electronics Engg.";
op5.value="Elements of Electronics Engg.";



removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
}


if((s1.options[s1.selectedIndex].value=="ee") &&(s2.options[s2.selectedIndex].value=="2nd year") && (s3.options[s3.selectedIndex].value=="3rd sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Electrical circuits";
op2.value="Electrical circuits";

op3.text="Electrical and electronics measurements";
op3.value="Electrical and electronics measurements";

op4.text="Fundamental of power electronics";
op4.value="Fundamental of power electronics";

op5.text="Electric power generation";
op5.value="Electric power generation";

op6.text="Electrical material and wiring";
op6.value="Electrical material and wiring";


removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
}
if((s1.options[s1.selectedIndex].value=="ee") &&(s2.options[s2.selectedIndex].value=="2nd year") && (s3.options[s3.selectedIndex].value=="4th sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Electric motors and transformers";
op2.value="Electric motors and transformers";

op3.text="Electrical power transmission and distribution";
op3.value="Electrical power transmission and distribution";

op4.text="Industrial measurements";
op4.value="Industrial measurements";

op5.text="Digital Electronics and microcontroller applications";
op5.value="Digital Electronics and microcontroller applications";

op6.text="Environmental studies";
op6.value="Environmental studies";

removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
}
if((s1.options[s1.selectedIndex].value=="ee") &&(s2.options[s2.selectedIndex].value=="3rd year") && (s3.options[s3.selectedIndex].value=="5th sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
var op7=document.createElement("option");
var op8=document.createElement("option");
var op9=document.createElement("option");
var op10=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Management";
op2.value="Management";

op3.text="Industrial AC machines";
op3.value="Industrial AC machines";

op4.text="Switchgear and protection";
op4.value="switchgear and protection";

op5.text="Energy conservation and audit";
op5.value="Energy Conservation and audit";

op6.text="Elements of industrial automation";
op6.value="Elements of industrial automation";

op7.text="Power electronics applications";
op7.value="Power electronics applications";

op8.text="Wind Power technologies";
op8.value="Wind power technologies";

op9.text="Power systems analysis";
op9.value="Power systems analysis";

op10.text="Illumination and electrification of building";
op10.value="Illumination and electrification of building";

removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
s4.options.add(op7);
s4.options.add(op8);
s4.options.add(op9);
s4.options.add(op10);
}
if((s1.options[s1.selectedIndex].value=="ee") &&(s2.options[s2.selectedIndex].value=="3rd year") && (s3.options[s3.selectedIndex].value=="6th sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Emerging trend in information technology";
op2.value="Emerging trend in information technology";

op3.text="Mobile android development";
op3.value="Mobile android development";

op4.text="Programming with python";
op4.value="Programming with python";

op5.text="Networking is computer technology";
op5.value="Networking is computer technology";

op6.text="Web development using PHP";
op6.value="Web development using PHP";


removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
}
if((s1.options[s1.selectedIndex].value=="e") &&(s2.options[s2.selectedIndex].value=="1st year") && (s3.options[s3.selectedIndex].value=="2nd sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Elements of Electrical Engg.";
op2.value="Elements of Electrical Engg.";

op3.text="Applied Mathematics";
op3.value="Applied Mathematics";

op4.text="Basic electronics";
op4.value="Basic electronics";

op5.text="Electronics Engg. material";
op5.value="Electronics Engg. Material";

op6.text="C programming language ";
op6.value="C programming language";


removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
}


if((s1.options[s1.selectedIndex].value=="e") &&(s2.options[s2.selectedIndex].value=="2nd year") && (s3.options[s3.selectedIndex].value=="3rd sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Digital techniques";
op2.value="Digital techniques";

op3.text="Applied Electronics";
op3.value="Applied Electronics";

op4.text="Electric circuits and networks";
op4.value="Electric circuits and networks";

op5.text="Electronics management and instrumentation";
op5.value="Electronics management and instrumentation";

op6.text="Principles of Electronics communication";
op6.value="Principles of Electronics communication";


removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
}
if((s1.options[s1.selectedIndex].value=="e") &&(s2.options[s2.selectedIndex].value=="2nd year") && (s3.options[s3.selectedIndex].value=="4th sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Linear integrated circuit";
op2.value="Linear integrated circuit";

op3.text="Consumer Electronics";
op3.value="Consumer Electronics";

op4.text="Microcontroller and applications";
op4.value="Microcontroller and applications";

op5.text="Basic power electronics";
op5.value="Basic power electronics";

op6.text="Digital communication systems";
op6.value="Digital communication systems";
removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
}
if((s1.options[s1.selectedIndex].value=="e") &&(s2.options[s2.selectedIndex].value=="3rd year") && (s3.options[s3.selectedIndex].value=="5th sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
var op7=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Environmental studies";
op2.value="Environmental studies";

op3.text="Control systems and plc";
op3.value="Control systems and plc";

op4.text="Embedded systems";
op4.value="Embedded systems";

op5.text="Mobile and wireless communication";
op5.value="Mobile and wireless communication";

op6.text="Industrial automation";
op6.value="Industrial automation";

op7.text="Microwave and radar";
op7.value="Microwave and radar";



removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);
s4.options.add(op7);
}
if((s1.options[s1.selectedIndex].value=="e") &&(s2.options[s2.selectedIndex].value=="3rd year") && (s3.options[s3.selectedIndex].value=="6th sem"))
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Emerging trend in information technology";
op2.value="Emerging trend in information technology";

op3.text="Mobile android development";
op3.value="Mobile android development";

op4.text="Programming with python";
op4.value="Programming with python";

op5.text="Networking is computer technology";
op5.value="Networking is computer technology";

op6.text="Web development using PHP";
op6.value="Web development using PHP";


removeAll(s4);
s4.options.add(op1);
s4.options.add(op2);
s4.options.add(op3);
s4.options.add(op4);
s4.options.add(op5);
s4.options.add(op6);

}
}
function val4()
{

var s1=document.getElementById("s1");
var s2=document.getElementById("s2");
var s3=document.getElementById("s3");
var s4=document.getElementById("s4");
var s5=document.getElementById("s5");
if(s4.options[s4.selectedIndex].value==s4.options[s4.selectedIndex].value)
{
var op1=document.createElement("option");
var op2=document.createElement("option");
var op3=document.createElement("option");
var op4=document.createElement("option");
var op5=document.createElement("option");
var op6=document.createElement("option");
op1.text="select";
op1.value="select";

op2.text="Syllabus";
op2.value="Syllabus";

op3.text="Question paper";
op3.value="Question paper";

op4.text="Answer paper";
op4.value="Answer paper";

op5.text="Syllabus Notes";
op5.value="Syllabus Notes";

op6.text="Projects";
op6.value="Project";


removeAll(s5);
s5.options.add(op1);
s5.options.add(op2);
s5.options.add(op3);
s5.options.add(op4);
s5.options.add(op5);
s5.options.add(op6);
}
}

function blank()
{
document.getElementById("result"). innerHTML="";
document.getElementById("result2"). innerHTML="";
}
function show()
{
document.getElementById("result"). innerHTML="Click to download";
}
function show2()
{
document.getElementById("result2"). innerHTML="Not found";
}
function result(){
var s4=document.getElementById("s4");
var s5=document.getElementById("s5");
if((s4.options[s4.selectedIndex].value=="English")&&(s5.options[s5.selectedIndex].value=="Syllabus"))
{
blank();

document.getElementById("result").href="https://drive.google.com/file/d/11Hqo2bngUB8pyYDlqFlk9x-W-yFEZMbQ/view?usp=drivesdk";
document.getElementById("result").style.visibility="visible";
show();
}
if((s4.options[s4.selectedIndex].value=="Math")&&(s5.options[s5.selectedIndex].value=="Syllabus"))
{
blank();

document.getElementById("result").href="https://drive.google.com/file/d/127snZtnvNnmgImxLmAhezivYAl8BC9VL/view?usp=drivesdk";
document.getElementById("result").style.visibility="visible";
show();
}
if((s4.options[s4.selectedIndex].value=="physics")&&(s5.options[s5.selectedIndex].value=="Syllabus"))
{
blank();

document.getElementById("result").href="https://drive.google.com/file/d/11cZ8GhzW8iUV4haK9PfTko5klLrHm87c/view?usp=drivesdk";
document.getElementById("result").style.visibility="visible";
show();
}
if((s4.options[s4.selectedIndex].value=="chemestry")&&(s5.options[s5.selectedIndex].value=="Syllabus"))
{
blank();

document.getElementById("result").href="https://drive.google.com/file/d/11cZ8GhzW8iUV4haK9PfTko5klLrHm87c/view?usp=drivesdk";
document.getElementById("result").style.visibility="visible";
show();
}
if((s4.options[s4.selectedIndex].value=="ICT")&&(s5.options[s5.selectedIndex].value=="Syllabus"))
{
blank();
document.getElementById("result2").style.visibility="visible";
show2();
}
if((s4.options[s4.selectedIndex].value=="Basic Electronics")&&(s5.options[s5.selectedIndex].value=="Syllabus"))
{
blank();

document.getElementById("result").href="https://drive.google.com/file/d/11nWiwVzC5_QA7xNJzD3b8VFo35I7-eyV/view?usp=drivesdk";
document.getElementById("result").style.visibility="visible";
show();
}
if((s4.options[s4.selectedIndex].value=="Applied Mathematics")&&(s5.options[s5.selectedIndex].value=="Syllabus"))
{
blank();

document.getElementById("result").href="https://drive.google.com/file/d/11j_Mq9FG1MIJVXPDMbjxW9rRBpF33xf6/view?usp=drivesdk";
document.getElementById("result").style.visibility="visible";
show();
}
if((s4.options[s4.selectedIndex].value=="Programming in C")&&(s5.options[s5.selectedIndex].value=="Syllabus"))
{
blank();

document.getElementById("result").href="https://drive.google.com/file/d/12G9exhVWm0qVaYrhgjHtfOVYPlW599Up/view?usp=drivesdk";
document.getElementById("result").style.visibility="visible";
show();
}
if((s4.options[s4.selectedIndex].value=="Elements of Electrical Engg.")&&(s5.options[s5.selectedIndex].value=="Syllabus"))
{
blank();

document.getElementById("result").href="https://drive.google.com/file/d/12CNACXQLQrhvl-b12xmMpAQyPCNKYtrO/view?usp=drivesdk";
document.getElementById("result").style.visibility="visible";
show();
}
if((s4.options[s4.selectedIndex].value=="Programming with python")&&(s5.options[s5.selectedIndex].value=="Syllabus"))
{
blank();

document.getElementById("result").href=" https://drive.google.com/file/d/10JwGPUfdqf0zrnz-0MbyOmuYUHCWh07G/view?usp=drivesdk";
document.getElementById("result").style.visibility="visible";
show();
}
if((s1.options[s1.selectedIndex].value=="cse") &&(s2.options[s2.selectedIndex].value==s2.options[s2.selectedIndex].value) && (s3.options[s3.selectedIndex].value==s3.options[s3.selectedIndex].value)
&&(s4.options[s4.selectedIndex].value==s4.options[s4.selectedIndex].value)&&(s5.options[s5.selectedIndex].value!="Syllabus"))
{
blank();

document.getElementById("result2").style.visibility="visible";
show2();
}
if((s1.options[s1.selectedIndex].value!="cse") &&(s2.options[s2.selectedIndex].value==s2.options[s2.selectedIndex].value) && (s3.options[s3.selectedIndex].value==s3.options[s3.selectedIndex].value)
&&(s4.options[s4.selectedIndex].value==s4.options[s4.selectedIndex].value)&&(s5.options[s5.selectedIndex].value==s5.options[s5.selectedIndex].value))
{
blank();

document.getElementById("result2").style.visibility="visible";
show2();
}
}
