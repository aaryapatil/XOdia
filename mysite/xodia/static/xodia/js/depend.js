$(document).ready(function() {

  var editor = ace.edit("editor");
      editor.setTheme("ace/theme/twilight");
      editor.getSession().setMode("ace/mode/c_cpp");
      editor.setValue("#include<stdio.h>\nint main()\n{ int i,j,k;\n  char s[3600];\n  scanf(\"%s\",s);\n  char array[20][20][9];\n  for(i=0;i<20;i++)\n    for(j=0;j<20;j++)\n      for(k=0;k<9;k++)\n        array[i][j][k]=s[i*9*20+j*9+k];\n  \n/*\nScan whether \n1. Grid is empty\n2. There is a move played by opponent\nin order to play the first move\nNote: Your code is always given the grid values according to player1.\n  Your code should output just one move and then exit.\n*/\n\n//For Instance:-\n\nfor(i=0;i<20;i++)\n{\n  for(j=0;j<20;j++)\n  {\n\n    int flag=0;\n    if(array[i][j][0]!='0' && array[i][j][0]!='2' && array[i][j][0]!='4')\n      {\n      //play first move\n      printf(\"%d,%d,%d,%d,\",i1,j1,i2,j2);\n        }\n          }\n            }\n\n      \n//Your code logic starts here\n\n//for Subsequent  moves\n  printf(\"%d,%d,%d,%d,%d,%d\",i1,j1,i2,j2,i3,j3);\n  //where (i1,j1) (i2,j2) (i3,j3) are coordinates of the seed and leaves\n\n\n}\n\n\n");
      $("#submit").click(function(){
        $.post("{% url 'xodia:personal_home' user.id %}",
                  { name: "submit" },
          editor.getValue();
        });
    });

   $('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrain_width: false, // Does not change width of dropdown to that of the activator
      hover: true, // Activate on hover
      gutter: 0, // Spacing from edge
      belowOrigin:true // Displays dropdown below the button
    }
  );
   $(document).ready(function() {
    $('select').material_select();
  });

       

});


var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.getSession().setMode("ace/mode/c_cpp");
      
function writethis(lang){
  console.log(lang);
  switch (lang.value) {
    case "c":
        c();
        break;
    case "cpp":
        cpp();
        break;
    case "java":
        java();
        break;
    case "python":
        python();
        break;
    case "python3":
        python();
        break;
    
}
}
function c(){
  editor.getSession().setMode("ace/mode/c_cpp");
  editor.setValue("#include<stdio.h>\nint main()\n{ int i,j,k;\n  char s[3600];\n  scanf(\"%s\",s);\n  char array[20][20][9];\n  for(i=0;i<20;i++)\n    for(j=0;j<20;j++)\n      for(k=0;k<9;k++)\n        array[i][j][k]=s[i*9*20+j*9+k];\n  \n/*\nScan whether \n1. Grid is empty\n2. There is a move played by opponent\nin order to play the first move\nNote: Your code is always given the grid values according to player1.\n  Your code should output just one move and then exit.\n*/\n\n//For Instance:-\n\nfor(i=0;i<20;i++)\n{\n  for(j=0;j<20;j++)\n  {\n\n    int flag=0;\n    if(array[i][j][0]!='0' && array[i][j][0]!='2' && array[i][j][0]!='4')\n      {\n      //play first move\n      printf(\"%d,%d,%d,%d,\",i1,j1,i2,j2);\n        }\n          }\n            }\n\n      \n//Your code logic starts here\n\n//for Subsequent  moves\n  printf(\"%d,%d,%d,%d,%d,%d\",i1,j1,i2,j2,i3,j3);\n  //where (i1,j1) (i2,j2) (i3,j3) are coordinates of the seed and leaves\n\n\n}\n\n\n");

}

function cpp(){
  editor.getSession().setMode("ace/mode/c_cpp");
  editor.setValue("#include<iostream>\nusing namespace std;\nint main()\n{ int i,j,k;\n  char s[3600];\n  cin>>s;\n  char array[20][20][9];\n  for(i=0;i<20;i++)\n    for(j=0;j<20;j++)\n      for(k=0;k<9;k++)\n        array[i][j][k]=s[i*9*20+j*9+k];\n\n  \n  \n/*\nScan whether \n1. Grid is empty\n2. There is a move played by opponent\nin order to play the first move\nNote: Your code is always given the grid values according to player1.\n  Your code should output just one move and then exit.\n*/\n\n//For Instance:-\n\nfor(i=0;i<20;i++)\n{\n  for(j=0;j<20;j++)\n  {\n\n    int flag=0;\n    if(array[i][j][0]!='0' && array[i][j][0]!='2' && array[i][j][0]!='4')\n      {\n      //play first move\n      cout<<i1+\",\"+<<j1+\",\"+i2+\",\"+j2;\n        }\n          }\n            }\n\n      \n//Your code logic starts here\n\n//for Subsequent  moves\n  cout<<i1+\",\"+j1+\",\"+i2+\",\"+j2+\",\"+i3+\",\"+j3;\n  //where (i1,j1) (i2,j2) (i3,j3) are coordinates of the seed and leaves\n\n}");  
}
function java(){
      editor.getSession().setMode("ace/mode/java");
      editor.setValue("import java.io.*;\nclass temp\n{\n  public static void main(String args[])throws IOException\n  {\n    BufferedReader br=new BufferedReader(new InputStreamReader(System.in));\n    char array[][][]=new char[20][20][9];\n    String s=br.readLine();\n    int i,j,k,i1=0,i2=0,i3=0,j1=0,j2=0,j3=0;\n    for(i=0;i<20;i++)\n    {\n      for(j=0;j<20;j++)\n      {\n        for(k=0;k<9;k++)\n        {\n          array[i][j][k]=s.charAt(i*9*20+j*9+k);\n        }\n      }\n    }\n    \n    //your code to grow\n\n    //for first move\n    System.out.print(i1+\",\"+j1+\",\"+i2+\",\"+j2);\n    //where (i1,j1)(i2,j2) are coordinates of the seed and leaf\n\n    //for the rest of the moves\n    System.out.print(i1+\",\"+j1+\",\"+i2+\",\"+j2+\",\"+i3+\",\"+j3);\n    //where (i1,j2)(i2,j2)(i3,j3) are coordinates of the seed and leaves\n  }\n}\n\n");  
}
function python(){
      editor.getSession().setMode("ace/mode/python");
      editor.setValue("import textwrap\nstring=str(raw_input())\na=textwrap.wrap(string,9)\narr=[['000000000'for i in range(20)]for j in range(20)]\nfor i in range(20):\n  for j in range(20):\n    arr[i][j]=a[i*20+j]\n\n\n\n'''\nScan whether \n1. Grid is empty\n2. There is a move played by opponent\nin order to play the first move\nNote: Your code is always given the grid values according to player1.\n  Your code should output just one move and then exit.\n'''\n\n#For Instance:-\n\nfor i in range(20):\n  for j in range(20):\n    flag=0\n    if(arr[i][j][0]!='0' and arr[i][j][0]!='2' and arr[i][j][0]!='4'):\n      #play first move\n      print i1+\",\"+j1+\",\"+i2+\",\"+j2\n      \n\n#Your code logic starts here\n\n#for Subsequent  moves\nprint i1+\",\"+j1+\",\"+i2+\",\"+j2+\",\"+i3+\",\"+j3\n#where (i1,j1) (i2,j2) (i3,j3) are coordinates of the seed and leaves\n");  
}
