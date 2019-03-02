using System.Web.Mvc;
using System.Web.Routing;
using Sitecore.Pipelines;

namespace DisasterSitecovery.Rules.App_Start
{
    public class RegisterCustomRoute
    {
        public virtual void Process(PipelineArgs args)
        {
            RouteTable.Routes.MapRoute(
                "CustomRoute", 
                "somerules/{id}", 
                new
                {
                    controller = "Rules",
                    Action = "Index",
                    Id = UrlParameter.Optional
                });
        }
    }
}