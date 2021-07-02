using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.SpaServices.AngularCli;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Portal.Smsis.DAL.Implementation;
using Portal.Smsis.DAL.Interfaces;

namespace NetCore.AngularTest {
    public class Startup {

        private readonly string _myCorsPolicy = "MyCorsPolicy";

        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddScoped<INumberingByRegionEFRepository, NumberingByRegionEFRepository>();

            services.AddControllersWithViews();

            // In production, the Angular files will be served from this directory
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ClientApp/dist";
            });

            services.AddCors(options =>
            {
                options.AddPolicy(name: _myCorsPolicy,
                    builder =>
                    {
                        builder.WithOrigins("http://tmn-web-smsis.ur.rt.ru", "http://localhost:50001", "https://localhost:50001")
                            .WithMethods("PUT", "DELETE", "POST", "GET")
                            .AllowAnyHeader();

                        //builder.AllowAnyOrigin()
                        //.AllowAnyMethod()
                        //.AllowAnyHeader();
                    });
            });
        }


        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseStaticFiles();
            if (!env.IsDevelopment())
            {
                app.UseSpaStaticFiles();
            }

            app.UseRouting();

            app.UseCors(_myCorsPolicy);

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller}/{action=Index}/{id?}");
            });

            app.UseSpa(spa =>
            {
                // To learn more about options for serving an Angular SPA from ASP.NET Core,
                // see https://go.microsoft.com/fwlink/?linkid=864501

                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    // Запуск своего Angular сервера
                    //spa.UseAngularCliServer(npmScript: "start");

                    // Подключение к уже запушенному Angular серверу
                    // Запуск сервера вручную "npm start" из коммандной строки.
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:4300");
                }
            });
        }
    }
}
