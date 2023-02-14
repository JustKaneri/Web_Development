namespace AspNetServis
{
    public class ValueMiddleware
    {
        public RequestDelegate next;
        private readonly IStringGenerate _stringGenerate;
        private readonly IDigetGenerate _digetGenerate;

        public ValueMiddleware(RequestDelegate next)
        {
            this.next = next;
        }

        public async Task InvokeAsync(HttpContext context, IStringGenerate stringGenerate, IDigetGenerate digetGenerate)
        {
            context.Response.ContentType = "text/html; charset=utf-8";
            await context.Response.WriteAsync("TR 1:" + stringGenerate.GetString()+"\r\n"+
                "TR 2:" + stringGenerate.GetString() + "\r\n" +
                "Singeltone: " + digetGenerate.GetNumber());

            await next.Invoke(context);
        }
    }
}
