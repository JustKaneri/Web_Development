namespace AspNet_Api_min
{
    public class UserController
    {
        public List<Person> Users = new List<Person>()
        {
            new Person(){Id = 1, Name = "Иван", Age = 10},
            new Person(){Id = 2, Name = "Петр", Age = 12},
            new Person(){Id = 3, Name = "Анна", Age = 15},
            new Person(){Id = 4, Name = "Андрей", Age = 18},
        };

        public async void GetAllUser(HttpResponse context)
        {
            await context.WriteAsJsonAsync(Users);
        }

        public async void GetUser(int id, HttpResponse context)
        {
            Person? user = Users.FirstOrDefault(us => us.Id == id);

            if(user == null)
            {
                await context.WriteAsJsonAsync(new { message = "нет данных" });
            }
            else
            {
                await context.WriteAsJsonAsync(user);
            }

            
        }

        public async void DeleteUser(int id, HttpResponse context)
        {
            Person? user = Users.FirstOrDefault(us => us.Id == id);

            if(user == null)
            {
                context.StatusCode = 404;
                await context.WriteAsJsonAsync(new { message = "нет данных" });
            }
            else
            {
                await context.WriteAsJsonAsync(user);
                Users.Remove(user);
            }
                
            
        }

        public async void PostUser(HttpResponse context,HttpRequest request)
        {
            try
            {
                var user = await request.ReadFromJsonAsync<Person>();

                if(user != null)
                {
                    Random rnd = new Random();
                    user.Id = rnd.Next(Users.Count,int.MaxValue);
                    Users.Add(user);

                    await context.WriteAsJsonAsync(user);
                }
            }
            catch 
            {
                context.StatusCode = 400;
                await context.WriteAsJsonAsync(new { message = "Not correct data" });
            }
        }

        public async void UpdateUser(HttpResponse context, HttpRequest request)
        {
            try
            {
                var user = await request.ReadFromJsonAsync<Person>();

                if (user != null)
                {
                    var currUser = Users.FirstOrDefault(us => us.Id == user.Id);

                    if (currUser != null)
                    {
                        currUser.Age = user.Age;
                        currUser.Name = user.Name;

                        await context.WriteAsJsonAsync(user);
                    }
                }
            }
            catch
            {
                context.StatusCode = 400;
                await context.WriteAsJsonAsync(new { message = "Not correct data" });
            }
        }
    }
}
