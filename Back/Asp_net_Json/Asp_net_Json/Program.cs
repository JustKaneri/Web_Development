var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

app.Run(async (context) =>
{
    if(context.Request.Path == "/api/user")
    {
		string message = "Нет данных";

		try
		{
			var pers = await context.Request.ReadFromJsonAsync<Person>();

			if (pers != null)
				message = pers.Name + " " + pers.Age;
		}
		catch 
		{
		}

		await context.Response.WriteAsJsonAsync(new { text = message });
    }
	else
	{
		context.Response.ContentType = "text/html; charset = utf-8";
		await context.Response.SendFileAsync("html/index.html");
	}

});

app.Run();


public record Person(string Name, int Age);