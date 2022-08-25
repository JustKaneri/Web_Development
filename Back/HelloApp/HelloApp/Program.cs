using System.Reflection.PortableExecutable;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.Run(async (context) =>
{
    context.Response.ContentType = "text/html; charset=utf-8";
    
    if(context.Request.Path == "/postuser")
    {
        var frm = context.Request.Form;

        string name = frm["name"];
        string age = frm["age"];

        await context.Response.WriteAsync($"<div><p>Name =  {name}</p> <p>Age = {age}</p> </div>");
    }
    else
    {
        await context.Response.SendFileAsync("html/index.html");
    }
});

app.Run();

