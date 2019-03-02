define(["sitecore", "/-/speak/v1/ExperienceEditor/ExperienceEditor.js", "/-/speak/v1/ExperienceEditor/ExperienceEditorProxy.js"], function (Sitecore, ExperienceEditor, ExperienceEditorProxy) {
    Sitecore.Commands.ToggleRenderingsRules =
    {
      canExecute: function (context) {
        // Determines whether command is disabled or enabled.
        return true;
      },
      execute: function (context) {
        context.currentContext.value = encodeURIComponent(ExperienceEditor.getPageEditingWindow().location);        
        var isChecked = ToggleDisplayAppliedRenderingsPersonalizationRules();

        context.button.attributes.isChecked = isChecked ? "1" : "0";
    }
    };
  });

  function ToggleDisplayAppliedRenderingsPersonalizationRules() {
    var ruleMessages = window.top.document.querySelectorAll(".exp-editor-applied-rules");
    console.log(ruleMessages);
    if(ruleMessages && ruleMessages.length > 0) {
        ruleMessages.forEach(x => {
            x.style += "display: none";
        });

        Array.prototype.forEach.call( ruleMessages, function( node ) {
            node.parentNode.removeChild( node );
        });

        return false;
    }

    var sitecoreItems = JSON.parse(window.top.document.querySelector("#scLayout").value)
    var renderings = sitecoreItems.r.d.filter(x => x.r.length > 1).map(x => x.r).flat().filter(x => x.rls && x.rls.ruleset && x.rls.ruleset.rule && x.rls.ruleset.rule.length > 0)

    renderings.forEach(x => {
        console.log(x);

        var firstSearchElement = contains("code", x["@uid"]);        
        var elementIdentifier = firstSearchElement["id"];

        var renderingCodeBlockWithRendering = window.top.document.getElementById(elementIdentifier);
        var infoMessageBlock = window.top.document.createElement('div');
        infoMessageBlock.style = "     position: absolute;    top: -10px;    background-color: rgba(232, 82, 82, 0.82);    right: -10px;     box-shadow: 1px 1px 1px 1px;";
        var rulesListTag = "<ul style='    list-style: none;    padding: 5px;    margin: 0px;'>";

        x.rls.ruleset.rule.forEach(y => {
            console.log(y);
            console.log(y["@name"]);
            rulesListTag += "<li>" + y["@name"] + "</li>";
        });
        rulesListTag += "</ul>";

        infoMessageBlock.innerHTML = "<div class='exp-editor-applied-rules'>" + rulesListTag + "</div>";
        renderingCodeBlockWithRendering.parentNode.style = "position: relative;";    
        renderingCodeBlockWithRendering.parentNode.insertBefore(infoMessageBlock, renderingCodeBlockWithRendering.nextSibling );
    });
    
    return true;
}

function contains(selector, text) {
    text = text.replace("{", "");
    text = text.replace("}", "");
    text = text.replace("-", "");
    text = text.replace("-", "");
    text = text.replace("-", "");
    text = text.replace("-", "");

    var allElementsBySelector = $(window.top.document.querySelectorAll(selector)).toArray();
    var searchElement = "";

    allElementsBySelector.forEach(x => {
        if(x.id.indexOf(text) > 0)
        searchElement = x;
    });
    
    return searchElement;

    // var elements = window.top.document.querySelectorAll(selector);
    // return Array.prototype.filter.call(elements, function(element){
    //     return RegExp(text).test(element.textContent);
    // });
}

