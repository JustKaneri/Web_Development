using AspNetServis;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSingleton<IDigetGenerate, DigetGenerate>();
builder.Services.AddTransient<IStringGenerate, StringGenerate>();

var app = builder.Build();

app.UseMiddleware<ValueMiddleware>();

app.Run();
