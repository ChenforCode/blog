(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{468:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[a("img",{attrs:{src:"https://img.hacpai.com/bing/20190323.jpg?imageView2/1/w/960/h/540/interlace/1/q/100",alt:""}})]),s._v(" "),a("h2",{attrs:{id:"git基础操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git基础操作"}},[s._v("#")]),s._v(" Git基础操作")]),s._v(" "),a("h3",{attrs:{id:"明白几个概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#明白几个概念"}},[s._v("#")]),s._v(" 明白几个概念")]),s._v(" "),a("ul",[a("li",[s._v("git是一个进行代码管理的工具，需要在自己电脑上进行安装，只能在本机进行代码管理。")]),s._v(" "),a("li",[s._v("github/gitlab/gitee是在网络上存储我们代码的仓库。同样也是和别的开发者一起合作开发的一个媒介。通过git+github可以完成多人的代码管理，以下gitlab/hub/ee不做区分")])]),s._v(" "),a("h3",{attrs:{id:"本机与gitlab进行授权"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#本机与gitlab进行授权"}},[s._v("#")]),s._v(" 本机与gitlab进行授权")]),s._v(" "),a("ul",[a("li",[s._v("git和github进行授权，需要将你本机的公钥加入到gitlab的SSh key中。下边是公钥生成命令，复制id_rsa.pub的结果，然后复制到gitlab的setting-SSH Keys处加入公钥，即可完成关联！关联之后可以通过ssh的方式进行克隆和推送，并且是不需要用户名和密码的。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.ssh\n\nssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" rsa -C"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"xxxxx@xxxxx.com"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" id_rsa.pub\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"新建仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#新建仓库"}},[s._v("#")]),s._v(" 新建仓库")]),s._v(" "),a("ul",[a("li",[s._v("第一种方式：在gitlab上建好远程仓库，然后通过git clone命令克隆到本地。这种方式适合空工程或者已经其他的开发者建好的仓库，自己可以直接克隆使用。")]),s._v(" "),a("li",[s._v("ssh方式和https方式的区别：")]),s._v(" "),a("li",[s._v("https用443端口，可以对repo根据权限进行读写，只要有账号密码就可进行操作。")]),s._v(" "),a("li",[s._v("ssh则用的是22端口，也可以对repo根据权限进行读写，但是需要SSH Keys授权，这个key是通过ssh key生成器生成的，然后放在github上，作为授权的证据，这样的话就不需要用户名和密码进行授权了。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /workspace\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" clone git@xxxxxxxxxxx.git\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("这个时候项目就会克隆到本地，接下来我们进入到项目根目录，注意接下来的所有操作都是在根目录下执行，这时候你用如下命令会出现以下内容，这里前缀没有remotes的都代表是你本地的分支，加了remote的都是远程的分支，加了星号的是你当前所在的分支")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /project\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-a")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\nbranch1\n\n* develop\n\nmaster\n\nremotes/origin/branch1\n\nremotes/origin/develop\n\nremotes/origin/master\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[s._v("第二种方式，适合特定项目的工程（如maven，cmake之类的），在项目初期就已经存在了一些初始化文件。这种方式首先需要在gitlab中新建一个空工程，仓库名字建议就取成工程名字。然后需要在本地的IDE等工具中建立起你的项目，该项目内部可能已经有了一些文件，如pom文件之类的，接下来需要进入项目根目录执行以下命令。")])]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('cd project\ngit init\ngit add .\ngit commit -m "first commit"\ngit remote add origin git@xxxxxxxxxxx.git\ngit pull --rebase origin master(当远程仓库创建的时候你默认加入了readme或者其他文件的时候需要执行该命令，先进行同步)\ngit push origin master\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("其中init命令是把当前仓库变成一个git仓库，会在根目录下生成一个.git的隐藏文件夹用来保存版本管理的一些信息。remote add origin命令是将远程仓库和本地仓库进行管理，后边的那个地址就是第一种方式进行仓库克隆的地址。")])]),s._v(" "),a("h3",{attrs:{id:"在自己的分支上进行开发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在自己的分支上进行开发"}},[s._v("#")]),s._v(" 在自己的分支上进行开发")]),s._v(" "),a("ul",[a("li",[s._v("首先我们在本地创建自己的分支，该命令会创建一个新的分支，并切换到新的分支上。想再次切换到其他分支可以再次使用checkout命令")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-b")]),s._v(" youBranchName\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout develop\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("ul",[a("li",[s._v("切换到自己的分支后，进行正常的代码编写，例如新建文件，编辑文件等等，在工作做完之后（你所编写的代码尽量是经过测试之后没问题了）就可以进行代码的推送。add的意思是将本次修改加入git的管理之下（如新添加的文件），git commit代表一次代码提交，通常是完成了某些事情之后才会commit，-m后边的参数需要填写你本次commit做了什么，该参数十分重要并且对于其他开发者来说可以清晰地知道你本次提交做了什么。push命令是推送，代表将本地代码推送到远程仓库，执行完该命令之后，远程仓库的代码就和你的代码保持一致。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"your contribution"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin youBranchName\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("git push推送失败。这个一般是因为远程仓库有更新，而你的本地仓库还没有更新。这个时候需要pull命令将代码拉取到本地，而拉取的过程中会出现一个vim的编辑界面，这里是填写本次pull的相关信息，有点类似于-m，但是这里一般都有默认的值，可以直接退出。（没有出现该页面可以忽略）")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\nxxxxxx@xxxxxx ~/Desktop/project "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n\nTo xxxxxxxxxxxxx.git\n\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("rejected"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" master -"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" master "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("fetch first"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\nerror: failed to push some refs to "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git@xxxxxxxxxxxxxx.git'")]),s._v("\n\nhint: Updates were rejected because the remote contains work that you "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n\nhint: not have locally. This is usually caused by another repository pushing\n\nhint: to the same ref. You may want to first integrate the remote changes\n\nhint: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("e.g., "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git pull ...'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" before pushing again.\n\nhint: See the "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Note about fast-forwards'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'git push --help'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" details.\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin branchName\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br")])]),a("h3",{attrs:{id:"代码拉取和解决冲突"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码拉取和解决冲突"}},[s._v("#")]),s._v(" 代码拉取和解决冲突")]),s._v(" "),a("ul",[a("li",[s._v("进行代码拉取的过程会出现以下情况：")]),s._v(" "),a("li",[s._v("第一种，二者对于一个文件的操作，如果是按照顺序修改，即A修改，A推送，然后B拉取，是不会出现冲突的，会把B直接修改成A修改之后的，不需要填写合并信息。")]),s._v(" "),a("li",[s._v("但是如果是A修改，A推送，然后B修改，B推送，这个时候推送失败，然后B进行拉取。")]),s._v(" "),a("li",[s._v("B进行拉取出现两种情况")])]),s._v(" "),a("ol",[a("li",[s._v("B修改和A修改的涉及到同一行，那么此时就会出现冲突，需要使用下边的方法手动解决。解决完之后，B推送，A可以正常拉取")]),s._v(" "),a("li",[s._v("B修改和A修改不涉及到同一行，那么此时只会出现一个合并通知，类似于填写commit -m的参数，说明此次合并的信息。然后B推送，A可以正常拉取。")])]),s._v(" "),a("ul",[a("li",[s._v("下边演示假设有人编辑了readme文件并率先提交到了gitlab上。另外一个人编辑同一行，然后解决冲突的过程。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://chenforcode.gitee.io/note/firstedit.png",alt:"abc"}})]),s._v(" "),a("ul",[a("li",[s._v("然后你在本地开发，你还不清楚情况，也编辑了readme文件")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://chenforcode.gitee.io/note/secondedit.png",alt:"abc"}})]),s._v(" "),a("ul",[a("li",[s._v("接下来你正常进行add commit push操作，然后发现了和刚才push一样的问题，你猜测是有人更新了代码，我也需要同步一下，因此你执行pull命令")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"编辑readme文件"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" pull origin master\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("这个时候就会出现如下问题，上边显示在readme里边出现了conflict，也就是出现了冲突。这个时候你会发现你本地的readme变了样子。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://chenforcode.gitee.io/note/conflict.png",alt:"abc"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://chenforcode.gitee.io/note/confictResult.png",alt:"abc"}})]),s._v(" "),a("ul",[a("li",[s._v("其中head和====之间的代码代表你本地的修改。====和a275b3d6之间的代码是远程的，也就是别人的修改。这个时候你就需要和那个人商量，到底保留哪里？这次我们选择都保留，那只需要把那些无用的符号删掉。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://chenforcode.gitee.io/note/resolveConfict.png",alt:"abc"}})]),s._v(" "),a("ul",[a("li",[s._v("接下来你需要重新执行那三个命令：")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v(".")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"解决冲突"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin master\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("ul",[a("li",[s._v("这个时候就可以推送成功，远端的代码也变成了你编辑的样子。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://chenforcode.gitee.io/note/editresult.png",alt:"abc"}})]),s._v(" "),a("ul",[a("li",[s._v("此时另外的开发者也可以进行正常拉取，因此为了避免拉取的过程中出现冲突，我们尽量在进行自己的工作之前，进行最新代码的拉取。")]),s._v(" "),a("li",[s._v("但是以上方式是一种不好的，或者说是一种迫不得已的方法，其实建议在开发中对于每一个开发者都进行最细化的分工，尽量不要让两个人去同时操作一个文件。")])]),s._v(" "),a("h3",{attrs:{id:"目前我们采用的开发模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目前我们采用的开发模式"}},[s._v("#")]),s._v(" 目前我们采用的开发模式")]),s._v(" "),a("ul",[a("li",[s._v("每个人拥有自己的分支，自己只在自己的分支上写代码，也只向自己的远程分支进行推送，因此各个成员在开发过程中不会出现冲突的情况。")]),s._v(" "),a("li",[s._v("由专人进行分支合并，例如本周大家的代码都提交完毕了。我可以切换到develop分支上，执行以下命令，将大家的代码合并到develop分支上，当然这个过程可能会出现冲突，类比上边的方式进行解决。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout develop\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge branch1\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge branch2\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" merge branch3\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("ul",[a("li",[s._v("所有的代码都合并结束之后，执行如下命令，完成develop分支的更新。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push origin develop\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);