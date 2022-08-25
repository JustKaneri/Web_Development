var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.Run(async (context) =>
{
    if (context.Request.Path == "/upload" && context.Request.Method == "POST")
    {
        string path = $"{Directory.GetCurrentDirectory()}\\upload";

        IFormFileCollection files = context.Request.Form.Files;

        foreach (var item in files)
        {
            string fileName = $"{path}\\{item.FileName}";

            using (FileStream fs = new FileStream(fileName,FileMode.Create))
            {
                await item.CopyToAsync(fs);
            }
        }
    }
    else
    {
        context.Response.ContentType = "text/html; charset=utf-8";
        await context.Response.SendFileAsync("html/index.html");
    }

});
app.Run();
