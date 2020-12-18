<%@ page language="java" contentType="text/html;
charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>html/ex04.jsp</title>
</head>

<body>
    <%
        String userName=request.getParameter("id");
        String userBirth=request.getParameter("birth");
        String userSex=request.getParameter("sex");
        String userEmail=request.getParameter("email");
        String userEagree=request.getParameter("eagree");
        String userPhone=request.getParameter("phone");
        String userPhone1=request.getParameter("phone1");
        String userPhone2=request.getParameter("phone2");
        String userJob=request.getParameter("job");
        String userSelf=request.getParameter("self");
        
        %>
    <h3>아이디: <%=userName%></h3> 
    <h3>생년월일: <%=userBirth%></h3>
    <h3>생별: <%=userSex%></h3>
    <h3>이메일: <%=userEmail%></h3>
        <h3>수신동의: <%=userEagree%></h3>
        <h3>폰번호: <%=userPhone%><%=userPhone1%><%=userPhone2%></h3>
    <h3>직업: <%=userJob%></h3>
  
    <h3>자기소개: <%=userSelf%></h3>


</body>

</html>