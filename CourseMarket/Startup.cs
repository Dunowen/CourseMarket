using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using CourseMarket.Data;
using Microsoft.EntityFrameworkCore;
using CourseMarket.Services;
using System.IO;
using Newtonsoft.Json.Serialization;
using Newtonsoft.Json;

namespace CourseMarket
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc();

            services.AddCors(options =>
            {
                options.AddPolicy("CorsPolicy",
                    builder => builder.AllowAnyOrigin()
                    .AllowAnyMethod()
                    .AllowAnyHeader()
                    .AllowCredentials());
            });

            //by default camelCase-ben küldené kliens oldalra a queryk eredményét a .NET Core, ezért a következő sorral ezt ignoráljuk
            services.AddMvc().AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());
            services.AddMvc().AddJsonOptions(options => options.SerializerSettings.ReferenceLoopHandling = ReferenceLoopHandling.Ignore);

            services.AddDbContext<CourseMarketDBContext>(options => options.UseSqlServer(Configuration.GetConnectionString("CourseMarketDatabase")));

            services.AddScoped<ITimesService, TimesService>();
            services.AddScoped<IUniversitiesService, UniversitiesService>();
            services.AddScoped<ISubjectsService, SubjectsService>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 &&
                    !Path.HasExtension(context.Request.Path.Value) &&
                    !context.Request.Path.Value.StartsWith("/api/"))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });

            // Configures application for usage as API with default route of '/api/[Controller]'
            app.UseMvcWithDefaultRoute();

            // Configures applcation to serve the index.html file from /wwwroot when you access the server from a web browser
            app.UseDefaultFiles();
            app.UseStaticFiles();
        }
    }
}
