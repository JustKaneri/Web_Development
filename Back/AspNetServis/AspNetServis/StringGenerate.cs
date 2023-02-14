namespace AspNetServis
{
    public class StringGenerate : IStringGenerate
    {
        private string _value = "Start___";

        public string GetString()
        {
           _value = _value + Guid.NewGuid().ToString();

            return _value;
        }
    }
}
