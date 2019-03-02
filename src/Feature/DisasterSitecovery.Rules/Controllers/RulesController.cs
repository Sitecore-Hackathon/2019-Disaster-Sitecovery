using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Xml.Linq;
using Sitecore.Data;
using Sitecore.Data.Items;
using Sitecore.Rules;

namespace DisasterSitecovery.Rules.Controllers
{
    public class RulesController : Controller
    {
        public RulesController()
        { }
        
        // GET: Rules
        public ActionResult Index(string id)
        {
            var db = Sitecore.Context.Database;

            var testUathentication = Sitecore.Context.User.IsAuthenticated;
            if (db == null)
            {
                Sitecore.Configuration.Factory.GetDatabase("master");
            }

            var item = db.GetItem(ID.Parse(id));

            Sitecore.Data.Fields.LayoutField layoutField = item.Fields["__Final renderings"];
            //Sitecore.Layouts.RenderingReference[] renderings = layoutField.GetReferences(Sitecore.Context.Device);
            var renderings = item.Visualization.GetRenderings(Sitecore.Context.Device, false);
            
            var renderingsWithPersonalization = renderings.Where(r => r.Settings.Rules.Count > 0).ToList();

            var rulesName = new List<string>();

            foreach (var rendering in renderingsWithPersonalization)
            foreach (var rule in rendering.Settings.Rules.Rules)
            {

                var ruleContext =
                    new Sitecore.Rules.ConditionalRenderings.ConditionalRenderingsRuleContext(
                        renderings.ToList(), rendering);

                if (rule.Evaluate(ruleContext))
                    rulesName.Add(rule.Name);

            }

            return View(rulesName);

            //Item item = db.GetItem(ID.Parse(id));
            //item.
            //Item ruleItem = db.GetItem(new Sitecore.Data.ID(SitecoreConstants.ItemGUID), item.Language);
            //String rule = ruleItem.Fields["Rule"].Value;
            //var rules = RuleFactory.ParseRules<RuleContext>(item.Database, XElement.Parse(rule));

            //var ruleContext = new RuleContext()
            //{
            //    Item = item
            //};
            //rules.Rules.First().
            //if (rules.Rules.Any())
            //    return rules.Rules.First().Evaluate(ruleContext);
        }
    }
}