using AspNet_Api_min;

var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

UserController userController = new UserController();

app.Run(async(context) =>
{
    if(context.Request.Path.ToString().Contains("/api/users"))
    {
        int id = GetID(context.Request.Path);

        switch (context.Request.Method)
        {
            case "POST":
                userController.PostUser(context.Response, context.Request);
                break;

            case "DELETE":
                userController.DeleteUser(id, context.Response);
                break;

            case "PUT":
                userController.UpdateUser(context.Response, context.Request);
                break;

            case "GET":
                if(id == -1)
                {
                    userController.GetAllUser(context.Response);
                }
                else
                {
                    userController.GetUser(id, context.Response);
                }
                break;
        }
    }
    else
    {
        context.Response.ContentType = "text/html; charset=utf-8";
        await context.Response.SendFileAsync("html/index.html");
    }
});

app.Run();


int GetID(PathString path)
{

    string id = "";
    try
    {
      id  = path.ToString().Split("/")[3];
    }
    catch
    {
        return -1;
    }
   

    int tmp = 0;

    if (int.TryParse(id, out tmp))
        return tmp;

    return -1;
}