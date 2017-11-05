blog.directive("content",articleContentFormat).directive("codeformat",articleCodeFormat);

function articleContentFormat() {
    return {
        restrict:'EA',
        // scope:{},// 创建指令自己的独立作用域，与父级毫无关系
        // template:"<div class='text'>{{content}}</div>", 不能使用，使用则替换掉啦
        link: articleContentFormatLink
    };

    function articleContentFormatLink($scope, element, attrs) {
        var text="<div class=\"text\">";
        var value=element.text();
        var varArray=value.split("\n");
        varArray.forEach(function (value,index,array) {
            // if (value!==""){
                text+="<p>"+value+"</p>";
            // }
        });
        element.context.innerHTML=text+"</div>";
    }
}

function articleCodeFormat() {
    return{
        restrict:'EA',
        template:articleCodeFormatTemplate
        // link:articleCodeFormatLink
    };

    function articleCodeFormatTemplate(element, attrs) {
        return "<div ui-codemirror=\"editorOptions\">"+element.text()+"</div>"
    }
}

