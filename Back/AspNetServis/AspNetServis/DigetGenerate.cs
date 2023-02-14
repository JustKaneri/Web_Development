namespace AspNetServis
{
    public class DigetGenerate : IDigetGenerate
    {
        private int number = 0;    

        public int GetNumber()
        {
            number = number + 1;
            return number;
        }
    }
}
