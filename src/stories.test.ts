import { describe, expect, test } from 'bun:test';
import { processMarkdown } from './stories';
import { VFile } from 'vfile';

describe('processMarkdown()', () => {
  test('success', () => {
    const result = processMarkdown(inputText);
    console.log(result.path);
    expect(result).toEqual(new VFile(expected));
  });
});

const inputText = `---
title: あたしにはよく分かんないにゃ
station-number: OM03
---

::act[起: 異世界に迷い込み、表明を避ける >>> 世界設定を理解する]

::scene[立ち飲み屋、主人公が右隣の男と話す >>> 舞台設定を知る]

小さな立ち飲み屋を見つけて一杯注文すると、右隣の男が、話しかけてきた。

「ここは、はじめて？」
「ええ。乗り過ごしたことに気づいて、慌てて降りたらそこの駅でした」
「それは運が悪い。この店、どきどきそういう人が来るんだよ」
「駅を出たときには、この店に気づきませんでした。タワーマンションがあったと思うんですが」
「終電すぎると、この辺は暗くなるからな」

帰宅途中の電車でうたた寝をするのは、いつものことだけれど、今日は乗り過ごしてしまった。慌てて電車を降りたら、ホームが屋根と柵で囲われた小さな地上駅だった。路地の向こうには、不釣り合いなほど大きなタワーマンションが黒々とそびえている。終電が出ましたので、と追い出された駅の前には、タクシー乗り場もない。

大きな道路を探して、商店街を歩いていく。どの飲食店も閉まっていて、住宅が目立ってきた。路地を入ったところにビアバーらしき店を見つけたけれど、もう閉店だと言われる。

仕方なく駅に戻ってきたら、シャッターが閉まった駅の前に、この小さな立ち飲み屋があった。歩くのにも疲れたので、とりあえず一杯飲むことにした。

::scene[立ち飲み屋、主人公が右隣の男と左隣のグループと話す >>> 登場人物たちの立場を理解]

右隣の男と天気の話をしていると、左側のグループが責め立てるような口調で割り込んできた。あんたは表現規制にどういう立場なんだ、はっきり言ってみろ。そういうことを言い出した。

私は、はいともいいえとも聞こえるような、あいまいな音を喉から出した。それから肯定とも否定とも取れるような、あいまいな身振りをした。

立ち飲み屋で知らない者どうしで交わす話題ではない。それよりも、そんな話題を今どき気にしている人がいることを不思議に思った。

尋ねてみると、左側のグループは壁にかかった液晶ディスプレイを指差す。

青い瞳と髪の猫娘キャラクターが、ぴょんぴょん動きながら話している。私は目が離せなくなる。あのバーチャルアバターはこの後、あたしにはよく分かんないにゃ、と言うだろう。何年も前にあれを配信していたのは私だったから、よく覚えている。

::separator

::act[承: かつての自分の炎上を目撃し、自分を守るために表明しない/しなかった >>> 表明を避ける主人公に共感/同情]

::scene[過去、TVuber の配信中、チャンネルが炎上した >>> 表現規制に対する温度差を想起]

あのころ私は、受験テクニックを解説する動画配信をしていた。顔を隠して、猫娘バーチャルアバターを使ったのは、当時、猫を使えばなんでも許される風潮があったからだ。それは今でもそうだろうし、五千年前だってそうだっただろう。

教育カテゴリーとして配信したせいで、コンテンツや広告に制約があって、収益は小さかった。けれど、学校で配布や購入されたタブレットでも閲覧ができたし、学校の設備からもアクセスできた。だから、いろんな生徒たちが休み時間に試聴した。

やっかいごとのきっかけは、表現の自由に関わる揉め事だった。何かの展示で適切・不適切、自由・不自由、適法・不適法などさまざまな軸で対立が起こった。よくあることだ。けれど声をあげていた人たちがネット上で大きく取り上げ、まるで世界の最重要課題であるかのようなムーブメントに持ちこんだ。表現の自由にフルコミットで賛同するかそうでないかが、踏み絵のようにネット配信者に突きつけられた。ネット配信だって表現の一形態で、規制や脅迫によって自由が奪われるのだ、と。

私はというと、もっと別の問題を解決することを使命だと信じていた。そのためには親しみやすい猫娘バーチャルアバターで、受験テクニックを配信することが最適解だと考えていた。

勉強する意味や学問の価値はいったん放っておいた。設問を解くテクニックを身につけて、まずは受験という土俵に上がってからだ、という状況に置かれた視聴者たちがいる。彼らには余計なことを考えて欲しくなかった。表現の自由なんて後で考えればいい、今はどうでもいいという暗黙のメッセージを込めて、賛成とも反対ともつかない曖昧な態度をとった。

あたしにはよく分かんないにゃ。

それが炎上に繋がった。

::separator

::scene[〃、異世界の立ち飲み屋、右隣の男が主人公を擁護 >>> 主人公の弱さに憤る]

左側のグループが液晶ディスプレイに向かって、一斉にブーイングを始める。右隣の男は、違うんだ、あの娘は違うんだよと、大声で割って入る。

私は右隣の男に耳打ちした。

「放っておいたらいいじゃないですか」
「推しは推せるうちに推さないとな」
「でも推しが潰れたり、逃げたりしたら大変です。関わらないほうがいい」

すると右隣の男は、静かに微笑んで、でもしっかりした口調で答えた。

「俺が推したことを覚えておいて欲しいんだ」

::separator

::scene[過去、炎上後のリアル世界、主人公が身バレして逃げる >>> 主人公に同情/共感]

あの炎上の最中、応援してくれるファンがいた。君の味方だ、あなたの考えを尊重します、それぞれに価値観があってそれは悪いことじゃない。あふれかえる攻撃的なコメントの中から、私は応援コメントを拾い出して何度も読み返した。救われたのだと思う。正気を保てたのは、間違いなくファンのおかげだった。

やがて私の本名や住所が特定され、顔写真がばら撒かれた。攻撃的な非難の矛先がファンにも向いた。

味方になってくれたファンを守るために、私は動画配信を打ち切った。当時はそう思っていたけれど、本当は逃げ出したのだと今では分かっている。ＳＮＳのアカウントも消し、住んでいた町を離れた。名前を変え、顔を整形し、ひっそりと生きている。配信の広告収入がなくなり、毎日の生活で精一杯だ。

何年も経って、炎上は忘れ去られた。あんなに盛り上がったムーブメントは立ち消えてしまった。中途半端な条例や、自主規制や、同調圧力や、対立は残ったままだ。

でも、私は覚えている。応援してくれた人たちを置き去りにして、逃げ出したことを。バーチャルアバター配信を始めた志を、諦めたことを。

::separator

::act[転: 左側のグループに問い詰められ、ファンを守るために表明 >>> 主人公を応援/見守る]

::scene[〃、左隣のグループに主人公が表明 >>> 主人公を心配/応援]

左側のグループが、詰め寄ってきた。あんたは規制に反対なのか。反対しないということは賛同ということだ、規制による弾圧を後押しすることになる、そういったことを叫び始めた。

この熱狂は一時的なものだ。真剣に取り合う必要なんてない。けれど、この正義に熱狂する人々は、私だけでなく、ファンにも牙をむく。

深呼吸する。

吸って、吐いて。

吸って、吐いて。

吸って、吐いて。

度を越した表現規制には反対です。一方で私は、貧困による教育機会の損失を解消したいと強く思っています。学費や食費を出せない家庭の子供たちは、教育の機会を失い、その結果、収入が低くなり、苦しい生活を強いられる。遠い外国の話ではありません。この駅の近くにも、あなたの家のまわりにも、どこにでもある話です。私もそのような子供時代を過ごしました。でも偶然拾った参考書のおかげでテストでいい点数を取れたから、そのおかげで奨学金を得られたから、貧困や犯罪から遠いところにいられる。私が教育カテゴリーの配信にこだわるのは、スマホやタブレットを買えない子供たちが、学校の設備や備品からアクセスできるからです。私を救ってくれたしくみを、次の世代につなぐことに、全振りしているんです。バーチャルアバター配信で得た広告収益は、すべて奨学金基金に寄付しました。

自分の志を表明するのは緊張する。

現在の自分の立場から話をしているのか、過去に配信していたころの立場で釈明をしているのか、よく分からなくなってきた。自分の声が、私の口からではなく、離れたところから聞こえる。左側のグループが、私と液晶ディスプレイを交互に見る。液晶ディスプレイには、バーチャルアバターが外れて素顔を晒し、奨学金について訴える私がいた。整形した今の顔で。

立ち飲み屋の客たちが私の正体に気づく。

右隣の男が、こちらに向き直る。

「配信のおかげで受験に合格できてな。それに奨学金で勉強を続けられたんだ。好きなときに、好きなものを飲み食いできるようになった。あんたのおかげだ」

::act[結: 炎上がおさまり受け入れられ、元の世界に戻る >>> 主人公の勇気に感服]

::scene[〃、主人公の表明が受け入れられ、安堵する >>> 安堵]

液晶ディスプレイには、猫娘を擁護するコメントや、意見は合わないけれど理解できるというコメントが流れる。コメントに、いいね、が続く。

立ち飲み屋は、そういうことなら一理あるかも知れない、という雰囲気になってきて、いいねと口に出す客もいる。よくねぇよと言う客もいるけれど、熱狂ではない。

::scene[〃、逡巡の後、元の世界に戻る >>> 心配と応援]

金属のシャッターがガラガラと開く音が聞こえた。後ろを振り返ると、駅が開いている。

ここに残れば、英雄とはいかないまでも、勇気ある配信者でいられる。あの改札を抜ければ、誰にも覚えられていない負け犬に逆戻りだろう。

「最初のとき、私は逃げ出したんです」
「そんなことはいいんだ。推しは推せるうちに推せばいい。ファンには感謝できるときに感謝すればいい。順番はどっちでもいいんじゃないかな。俺にもよく分かんねぇんだけど」

右隣の男はグラスに口をつけ、それから黙った。

私は改札を通り抜けて、ホームに上がる。明るくなった商店街に目を向けると立ち飲み屋は見当たらず、小さな駅の隣には不釣り合いなタワーマンションがそびえている。
`;

const expected = {
  cwd: '/Users/toru/works/momo',
  data: { title: 'あたしにはよく分かんないにゃ', 'station-number': 'OM03' },
  history: [],
  messages: [],
  value: text,
  result: {
    type: 'root',
    children: [
      {
        type: 'yaml',
        value: 'title: あたしにはよく分かんないにゃ\nstation-number: OM03',
        position: {
          start: { line: 1, column: 1, offset: 0 },
          end: { line: 4, column: 4, offset: 50 },
        },
      },
      {
        type: 'leafDirective',
        name: 'act',
        attributes: {},
        children: [
          {
            type: 'text',
            value: '起: 異世界に迷い込み、表明を避ける >>> 世界設定を理解する',
            position: {
              start: { line: 6, column: 7, offset: 58 },
              end: { line: 6, column: 39, offset: 90 },
            },
          },
        ],
        position: {
          start: { line: 6, column: 1, offset: 52 },
          end: { line: 6, column: 40, offset: 91 },
        },
        data: { hName: 'act', hProperties: {} },
      },
      {
        type: 'leafDirective',
        name: 'scene',
        attributes: {},
        children: [
          {
            type: 'text',
            value: '立ち飲み屋、主人公が右隣の男と話す >>> 舞台設定を知る',
            position: {
              start: { line: 8, column: 9, offset: 101 },
              end: { line: 8, column: 38, offset: 130 },
            },
          },
        ],
        position: {
          start: { line: 8, column: 1, offset: 93 },
          end: { line: 8, column: 39, offset: 131 },
        },
        data: { hName: 'scene', hProperties: {} },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '小さな立ち飲み屋を見つけて一杯注文すると、右隣の男が、話しかけてきた。',
            position: {
              start: { line: 10, column: 1, offset: 133 },
              end: { line: 10, column: 36, offset: 168 },
            },
          },
        ],
        position: {
          start: { line: 10, column: 1, offset: 133 },
          end: { line: 10, column: 36, offset: 168 },
        },
      },
      {
        type: 'paragraph',
        children: [
          { type: 'text', value: '「ここは、はじめて？」' },
          { type: 'break' },
          {
            type: 'text',
            value:
              '「ええ。乗り過ごしたことに気づいて、慌てて降りたらそこの駅でした」',
          },
          { type: 'break' },
          {
            type: 'text',
            value: '「それは運が悪い。この店、どきどきそういう人が来るんだよ」',
          },
          { type: 'break' },
          {
            type: 'text',
            value:
              '「駅を出たときには、この店に気づきませんでした。タワーマンションがあったと思うんですが」',
          },
          { type: 'break' },
          {
            type: 'text',
            value: '「終電すぎると、この辺は暗くなるからな」',
          },
        ],
        position: {
          start: { line: 12, column: 1, offset: 170 },
          end: { line: 16, column: 21, offset: 311 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '帰宅途中の電車でうたた寝をするのは、いつものことだけれど、今日は乗り過ごしてしまった。慌てて電車を降りたら、ホームが屋根と柵で囲われた小さな地上駅だった。路地の向こうには、不釣り合いなほど大きなタワーマンションが黒々とそびえている。終電が出ましたので、と追い出された駅の前には、タクシー乗り場もない。',
            position: {
              start: { line: 18, column: 1, offset: 313 },
              end: { line: 18, column: 151, offset: 463 },
            },
          },
        ],
        position: {
          start: { line: 18, column: 1, offset: 313 },
          end: { line: 18, column: 151, offset: 463 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '大きな道路を探して、商店街を歩いていく。どの飲食店も閉まっていて、住宅が目立ってきた。路地を入ったところにビアバーらしき店を見つけたけれど、もう閉店だと言われる。',
            position: {
              start: { line: 20, column: 1, offset: 465 },
              end: { line: 20, column: 82, offset: 546 },
            },
          },
        ],
        position: {
          start: { line: 20, column: 1, offset: 465 },
          end: { line: 20, column: 82, offset: 546 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '仕方なく駅に戻ってきたら、シャッターが閉まった駅の前に、この小さな立ち飲み屋があった。歩くのにも疲れたので、とりあえず一杯飲むことにした。',
            position: {
              start: { line: 22, column: 1, offset: 548 },
              end: { line: 22, column: 70, offset: 617 },
            },
          },
        ],
        position: {
          start: { line: 22, column: 1, offset: 548 },
          end: { line: 22, column: 70, offset: 617 },
        },
      },
      {
        type: 'leafDirective',
        name: 'scene',
        attributes: {},
        children: [
          {
            type: 'text',
            value:
              '立ち飲み屋、主人公が右隣の男と左隣のグループと話す >>> 登場人物たちの立場を理解',
            position: {
              start: { line: 24, column: 9, offset: 627 },
              end: { line: 24, column: 51, offset: 669 },
            },
          },
        ],
        position: {
          start: { line: 24, column: 1, offset: 619 },
          end: { line: 24, column: 52, offset: 670 },
        },
        data: { hName: 'scene', hProperties: {} },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '右隣の男と天気の話をしていると、左側のグループが責め立てるような口調で割り込んできた。あんたは表現規制にどういう立場なんだ、はっきり言ってみろ。そういうことを言い出した。',
            position: {
              start: { line: 26, column: 1, offset: 672 },
              end: { line: 26, column: 86, offset: 757 },
            },
          },
        ],
        position: {
          start: { line: 26, column: 1, offset: 672 },
          end: { line: 26, column: 86, offset: 757 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '私は、はいともいいえとも聞こえるような、あいまいな音を喉から出した。それから肯定とも否定とも取れるような、あいまいな身振りをした。',
            position: {
              start: { line: 28, column: 1, offset: 759 },
              end: { line: 28, column: 66, offset: 824 },
            },
          },
        ],
        position: {
          start: { line: 28, column: 1, offset: 759 },
          end: { line: 28, column: 66, offset: 824 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '立ち飲み屋で知らない者どうしで交わす話題ではない。それよりも、そんな話題を今どき気にしている人がいることを不思議に思った。',
            position: {
              start: { line: 30, column: 1, offset: 826 },
              end: { line: 30, column: 62, offset: 887 },
            },
          },
        ],
        position: {
          start: { line: 30, column: 1, offset: 826 },
          end: { line: 30, column: 62, offset: 887 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '尋ねてみると、左側のグループは壁にかかった液晶ディスプレイを指差す。',
            position: {
              start: { line: 32, column: 1, offset: 889 },
              end: { line: 32, column: 35, offset: 923 },
            },
          },
        ],
        position: {
          start: { line: 32, column: 1, offset: 889 },
          end: { line: 32, column: 35, offset: 923 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '青い瞳と髪の猫娘キャラクターが、ぴょんぴょん動きながら話している。私は目が離せなくなる。あのバーチャルアバターはこの後、あたしにはよく分かんないにゃ、と言うだろう。何年も前にあれを配信していたのは私だったから、よく覚えている。',
            position: {
              start: { line: 34, column: 1, offset: 925 },
              end: { line: 34, column: 114, offset: 1038 },
            },
          },
        ],
        position: {
          start: { line: 34, column: 1, offset: 925 },
          end: { line: 34, column: 114, offset: 1038 },
        },
      },
      {
        type: 'leafDirective',
        name: 'separator',
        attributes: {},
        children: [],
        position: {
          start: { line: 36, column: 1, offset: 1040 },
          end: { line: 36, column: 12, offset: 1051 },
        },
        data: { hName: 'separator', hProperties: {} },
      },
      {
        type: 'leafDirective',
        name: 'act',
        attributes: {},
        children: [
          {
            type: 'text',
            value:
              '承: かつての自分の炎上を目撃し、自分を守るために表明しない/しなかった >>> 表明を避ける主人公に共感/同情',
            position: {
              start: { line: 38, column: 7, offset: 1059 },
              end: { line: 38, column: 63, offset: 1115 },
            },
          },
        ],
        position: {
          start: { line: 38, column: 1, offset: 1053 },
          end: { line: 38, column: 64, offset: 1116 },
        },
        data: { hName: 'act', hProperties: {} },
      },
      {
        type: 'leafDirective',
        name: 'scene',
        attributes: {},
        children: [
          {
            type: 'text',
            value:
              '過去、TVuber の配信中、チャンネルが炎上した >>> 表現規制に対する温度差を想起',
            position: {
              start: { line: 40, column: 9, offset: 1126 },
              end: { line: 40, column: 53, offset: 1170 },
            },
          },
        ],
        position: {
          start: { line: 40, column: 1, offset: 1118 },
          end: { line: 40, column: 54, offset: 1171 },
        },
        data: { hName: 'scene', hProperties: {} },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              'あのころ私は、受験テクニックを解説する動画配信をしていた。顔を隠して、猫娘バーチャルアバターを使ったのは、当時、猫を使えばなんでも許される風潮があったからだ。それは今でもそうだろうし、五千年前だってそうだっただろう。',
            position: {
              start: { line: 42, column: 1, offset: 1173 },
              end: { line: 42, column: 109, offset: 1281 },
            },
          },
        ],
        position: {
          start: { line: 42, column: 1, offset: 1173 },
          end: { line: 42, column: 109, offset: 1281 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '教育カテゴリーとして配信したせいで、コンテンツや広告に制約があって、収益は小さかった。けれど、学校で配布や購入されたタブレットでも閲覧ができたし、学校の設備からもアクセスできた。だから、いろんな生徒たちが休み時間に試聴した。',
            position: {
              start: { line: 44, column: 1, offset: 1283 },
              end: { line: 44, column: 113, offset: 1395 },
            },
          },
        ],
        position: {
          start: { line: 44, column: 1, offset: 1283 },
          end: { line: 44, column: 113, offset: 1395 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              'やっかいごとのきっかけは、表現の自由に関わる揉め事だった。何かの展示で適切・不適切、自由・不自由、適法・不適法などさまざまな軸で対立が起こった。よくあることだ。けれど声をあげていた人たちがネット上で大きく取り上げ、まるで世界の最重要課題であるかのようなムーブメントに持ちこんだ。表現の自由にフルコミットで賛同するかそうでないかが、踏み絵のようにネット配信者に突きつけられた。ネット配信だって表現の一形態で、規制や脅迫によって自由が奪われるのだ、と。',
            position: {
              start: { line: 46, column: 1, offset: 1397 },
              end: { line: 46, column: 225, offset: 1621 },
            },
          },
        ],
        position: {
          start: { line: 46, column: 1, offset: 1397 },
          end: { line: 46, column: 225, offset: 1621 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '私はというと、もっと別の問題を解決することを使命だと信じていた。そのためには親しみやすい猫娘バーチャルアバターで、受験テクニックを配信することが最適解だと考えていた。',
            position: {
              start: { line: 48, column: 1, offset: 1623 },
              end: { line: 48, column: 84, offset: 1706 },
            },
          },
        ],
        position: {
          start: { line: 48, column: 1, offset: 1623 },
          end: { line: 48, column: 84, offset: 1706 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '勉強する意味や学問の価値はいったん放っておいた。設問を解くテクニックを身につけて、まずは受験という土俵に上がってからだ、という状況に置かれた視聴者たちがいる。彼らには余計なことを考えて欲しくなかった。表現の自由なんて後で考えればいい、今はどうでもいいという暗黙のメッセージを込めて、賛成とも反対ともつかない曖昧な態度をとった。',
            position: {
              start: { line: 50, column: 1, offset: 1708 },
              end: { line: 50, column: 164, offset: 1871 },
            },
          },
        ],
        position: {
          start: { line: 50, column: 1, offset: 1708 },
          end: { line: 50, column: 164, offset: 1871 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: 'あたしにはよく分かんないにゃ。',
            position: {
              start: { line: 52, column: 1, offset: 1873 },
              end: { line: 52, column: 16, offset: 1888 },
            },
          },
        ],
        position: {
          start: { line: 52, column: 1, offset: 1873 },
          end: { line: 52, column: 16, offset: 1888 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: 'それが炎上に繋がった。',
            position: {
              start: { line: 54, column: 1, offset: 1890 },
              end: { line: 54, column: 12, offset: 1901 },
            },
          },
        ],
        position: {
          start: { line: 54, column: 1, offset: 1890 },
          end: { line: 54, column: 12, offset: 1901 },
        },
      },
      {
        type: 'leafDirective',
        name: 'separator',
        attributes: {},
        children: [],
        position: {
          start: { line: 56, column: 1, offset: 1903 },
          end: { line: 56, column: 12, offset: 1914 },
        },
        data: { hName: 'separator', hProperties: {} },
      },
      {
        type: 'leafDirective',
        name: 'scene',
        attributes: {},
        children: [
          {
            type: 'text',
            value:
              '〃、異世界の立ち飲み屋、右隣の男が主人公を擁護 >>> 主人公の弱さに憤る',
            position: {
              start: { line: 58, column: 9, offset: 1924 },
              end: { line: 58, column: 46, offset: 1961 },
            },
          },
        ],
        position: {
          start: { line: 58, column: 1, offset: 1916 },
          end: { line: 58, column: 47, offset: 1962 },
        },
        data: { hName: 'scene', hProperties: {} },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '左側のグループが液晶ディスプレイに向かって、一斉にブーイングを始める。右隣の男は、違うんだ、あの娘は違うんだよと、大声で割って入る。',
            position: {
              start: { line: 60, column: 1, offset: 1964 },
              end: { line: 60, column: 67, offset: 2030 },
            },
          },
        ],
        position: {
          start: { line: 60, column: 1, offset: 1964 },
          end: { line: 60, column: 67, offset: 2030 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: '私は右隣の男に耳打ちした。',
            position: {
              start: { line: 62, column: 1, offset: 2032 },
              end: { line: 62, column: 14, offset: 2045 },
            },
          },
        ],
        position: {
          start: { line: 62, column: 1, offset: 2032 },
          end: { line: 62, column: 14, offset: 2045 },
        },
      },
      {
        type: 'paragraph',
        children: [
          { type: 'text', value: '「放っておいたらいいじゃないですか」' },
          { type: 'break' },
          { type: 'text', value: '「推しは推せるうちに推さないとな」' },
          { type: 'break' },
          {
            type: 'text',
            value:
              '「でも推しが潰れたり、逃げたりしたら大変です。関わらないほうがいい」',
          },
        ],
        position: {
          start: { line: 64, column: 1, offset: 2047 },
          end: { line: 66, column: 35, offset: 2118 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              'すると右隣の男は、静かに微笑んで、でもしっかりした口調で答えた。',
            position: {
              start: { line: 68, column: 1, offset: 2120 },
              end: { line: 68, column: 33, offset: 2152 },
            },
          },
        ],
        position: {
          start: { line: 68, column: 1, offset: 2120 },
          end: { line: 68, column: 33, offset: 2152 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: '「俺が推したことを覚えておいて欲しいんだ」',
            position: {
              start: { line: 70, column: 1, offset: 2154 },
              end: { line: 70, column: 22, offset: 2175 },
            },
          },
        ],
        position: {
          start: { line: 70, column: 1, offset: 2154 },
          end: { line: 70, column: 22, offset: 2175 },
        },
      },
      {
        type: 'leafDirective',
        name: 'separator',
        attributes: {},
        children: [],
        position: {
          start: { line: 72, column: 1, offset: 2177 },
          end: { line: 72, column: 12, offset: 2188 },
        },
        data: { hName: 'separator', hProperties: {} },
      },
      {
        type: 'leafDirective',
        name: 'scene',
        attributes: {},
        children: [
          {
            type: 'text',
            value:
              '過去、炎上後のリアル世界、主人公が身バレして逃げる >>> 主人公に同情/共感',
            position: {
              start: { line: 74, column: 9, offset: 2198 },
              end: { line: 74, column: 48, offset: 2237 },
            },
          },
        ],
        position: {
          start: { line: 74, column: 1, offset: 2190 },
          end: { line: 74, column: 49, offset: 2238 },
        },
        data: { hName: 'scene', hProperties: {} },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              'あの炎上の最中、応援してくれるファンがいた。君の味方だ、あなたの考えを尊重します、それぞれに価値観があってそれは悪いことじゃない。あふれかえる攻撃的なコメントの中から、私は応援コメントを拾い出して何度も読み返した。救われたのだと思う。正気を保てたのは、間違いなくファンのおかげだった。',
            position: {
              start: { line: 76, column: 1, offset: 2240 },
              end: { line: 76, column: 143, offset: 2382 },
            },
          },
        ],
        position: {
          start: { line: 76, column: 1, offset: 2240 },
          end: { line: 76, column: 143, offset: 2382 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              'やがて私の本名や住所が特定され、顔写真がばら撒かれた。攻撃的な非難の矛先がファンにも向いた。',
            position: {
              start: { line: 78, column: 1, offset: 2384 },
              end: { line: 78, column: 47, offset: 2430 },
            },
          },
        ],
        position: {
          start: { line: 78, column: 1, offset: 2384 },
          end: { line: 78, column: 47, offset: 2430 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '味方になってくれたファンを守るために、私は動画配信を打ち切った。当時はそう思っていたけれど、本当は逃げ出したのだと今では分かっている。ＳＮＳのアカウントも消し、住んでいた町を離れた。名前を変え、顔を整形し、ひっそりと生きている。配信の広告収入がなくなり、毎日の生活で精一杯だ。',
            position: {
              start: { line: 80, column: 1, offset: 2432 },
              end: { line: 80, column: 139, offset: 2570 },
            },
          },
        ],
        position: {
          start: { line: 80, column: 1, offset: 2432 },
          end: { line: 80, column: 139, offset: 2570 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '何年も経って、炎上は忘れ去られた。あんなに盛り上がったムーブメントは立ち消えてしまった。中途半端な条例や、自主規制や、同調圧力や、対立は残ったままだ。',
            position: {
              start: { line: 82, column: 1, offset: 2572 },
              end: { line: 82, column: 76, offset: 2647 },
            },
          },
        ],
        position: {
          start: { line: 82, column: 1, offset: 2572 },
          end: { line: 82, column: 76, offset: 2647 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              'でも、私は覚えている。応援してくれた人たちを置き去りにして、逃げ出したことを。バーチャルアバター配信を始めた志を、諦めたことを。',
            position: {
              start: { line: 84, column: 1, offset: 2649 },
              end: { line: 84, column: 65, offset: 2713 },
            },
          },
        ],
        position: {
          start: { line: 84, column: 1, offset: 2649 },
          end: { line: 84, column: 65, offset: 2713 },
        },
      },
      {
        type: 'leafDirective',
        name: 'separator',
        attributes: {},
        children: [],
        position: {
          start: { line: 86, column: 1, offset: 2715 },
          end: { line: 86, column: 12, offset: 2726 },
        },
        data: { hName: 'separator', hProperties: {} },
      },
      {
        type: 'leafDirective',
        name: 'act',
        attributes: {},
        children: [
          {
            type: 'text',
            value:
              '転: 左側のグループに問い詰められ、ファンを守るために表明 >>> 主人公を応援/見守る',
            position: {
              start: { line: 88, column: 7, offset: 2734 },
              end: { line: 88, column: 51, offset: 2778 },
            },
          },
        ],
        position: {
          start: { line: 88, column: 1, offset: 2728 },
          end: { line: 88, column: 52, offset: 2779 },
        },
        data: { hName: 'act', hProperties: {} },
      },
      {
        type: 'leafDirective',
        name: 'scene',
        attributes: {},
        children: [
          {
            type: 'text',
            value: '〃、左隣のグループに主人公が表明 >>> 主人公を心配/応援',
            position: {
              start: { line: 90, column: 9, offset: 2789 },
              end: { line: 90, column: 39, offset: 2819 },
            },
          },
        ],
        position: {
          start: { line: 90, column: 1, offset: 2781 },
          end: { line: 90, column: 40, offset: 2820 },
        },
        data: { hName: 'scene', hProperties: {} },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '左側のグループが、詰め寄ってきた。あんたは規制に反対なのか。反対しないということは賛同ということだ、規制による弾圧を後押しすることになる、そういったことを叫び始めた。',
            position: {
              start: { line: 92, column: 1, offset: 2822 },
              end: { line: 92, column: 84, offset: 2905 },
            },
          },
        ],
        position: {
          start: { line: 92, column: 1, offset: 2822 },
          end: { line: 92, column: 84, offset: 2905 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              'この熱狂は一時的なものだ。真剣に取り合う必要なんてない。けれど、この正義に熱狂する人々は、私だけでなく、ファンにも牙をむく。',
            position: {
              start: { line: 94, column: 1, offset: 2907 },
              end: { line: 94, column: 63, offset: 2969 },
            },
          },
        ],
        position: {
          start: { line: 94, column: 1, offset: 2907 },
          end: { line: 94, column: 63, offset: 2969 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: '深呼吸する。',
            position: {
              start: { line: 96, column: 1, offset: 2971 },
              end: { line: 96, column: 7, offset: 2977 },
            },
          },
        ],
        position: {
          start: { line: 96, column: 1, offset: 2971 },
          end: { line: 96, column: 7, offset: 2977 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: '吸って、吐いて。',
            position: {
              start: { line: 98, column: 1, offset: 2979 },
              end: { line: 98, column: 9, offset: 2987 },
            },
          },
        ],
        position: {
          start: { line: 98, column: 1, offset: 2979 },
          end: { line: 98, column: 9, offset: 2987 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: '吸って、吐いて。',
            position: {
              start: { line: 100, column: 1, offset: 2989 },
              end: { line: 100, column: 9, offset: 2997 },
            },
          },
        ],
        position: {
          start: { line: 100, column: 1, offset: 2989 },
          end: { line: 100, column: 9, offset: 2997 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: '吸って、吐いて。',
            position: {
              start: { line: 102, column: 1, offset: 2999 },
              end: { line: 102, column: 9, offset: 3007 },
            },
          },
        ],
        position: {
          start: { line: 102, column: 1, offset: 2999 },
          end: { line: 102, column: 9, offset: 3007 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '度を越した表現規制には反対です。一方で私は、貧困による教育機会の損失を解消したいと強く思っています。学費や食費を出せない家庭の子供たちは、教育の機会を失い、その結果、収入が低くなり、苦しい生活を強いられる。遠い外国の話ではありません。この駅の近くにも、あなたの家のまわりにも、どこにでもある話です。私もそのような子供時代を過ごしました。でも偶然拾った参考書のおかげでテストでいい点数を取れたから、そのおかげで奨学金を得られたから、貧困や犯罪から遠いところにいられる。私が教育カテゴリーの配信にこだわるのは、スマホやタブレットを買えない子供たちが、学校の設備や備品からアクセスできるからです。私を救ってくれたしくみを、次の世代につなぐことに、全振りしているんです。バーチャルアバター配信で得た広告収益は、すべて奨学金基金に寄付しました。',
            position: {
              start: { line: 104, column: 1, offset: 3009 },
              end: { line: 104, column: 368, offset: 3376 },
            },
          },
        ],
        position: {
          start: { line: 104, column: 1, offset: 3009 },
          end: { line: 104, column: 368, offset: 3376 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: '自分の志を表明するのは緊張する。',
            position: {
              start: { line: 106, column: 1, offset: 3378 },
              end: { line: 106, column: 17, offset: 3394 },
            },
          },
        ],
        position: {
          start: { line: 106, column: 1, offset: 3378 },
          end: { line: 106, column: 17, offset: 3394 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '現在の自分の立場から話をしているのか、過去に配信していたころの立場で釈明をしているのか、よく分からなくなってきた。自分の声が、私の口からではなく、離れたところから聞こえる。左側のグループが、私と液晶ディスプレイを交互に見る。液晶ディスプレイには、バーチャルアバターが外れて素顔を晒し、奨学金について訴える私がいた。整形した今の顔で。',
            position: {
              start: { line: 108, column: 1, offset: 3396 },
              end: { line: 108, column: 167, offset: 3562 },
            },
          },
        ],
        position: {
          start: { line: 108, column: 1, offset: 3396 },
          end: { line: 108, column: 167, offset: 3562 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: '立ち飲み屋の客たちが私の正体に気づく。',
            position: {
              start: { line: 110, column: 1, offset: 3564 },
              end: { line: 110, column: 20, offset: 3583 },
            },
          },
        ],
        position: {
          start: { line: 110, column: 1, offset: 3564 },
          end: { line: 110, column: 20, offset: 3583 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: '右隣の男が、こちらに向き直る。',
            position: {
              start: { line: 112, column: 1, offset: 3585 },
              end: { line: 112, column: 16, offset: 3600 },
            },
          },
        ],
        position: {
          start: { line: 112, column: 1, offset: 3585 },
          end: { line: 112, column: 16, offset: 3600 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '「配信のおかげで受験に合格できてな。それに奨学金で勉強を続けられたんだ。好きなときに、好きなものを飲み食いできるようになった。あんたのおかげだ」',
            position: {
              start: { line: 114, column: 1, offset: 3602 },
              end: { line: 114, column: 73, offset: 3674 },
            },
          },
        ],
        position: {
          start: { line: 114, column: 1, offset: 3602 },
          end: { line: 114, column: 73, offset: 3674 },
        },
      },
      {
        type: 'leafDirective',
        name: 'act',
        attributes: {},
        children: [
          {
            type: 'text',
            value:
              '結: 炎上がおさまり受け入れられ、元の世界に戻る >>> 主人公の勇気に感服',
            position: {
              start: { line: 116, column: 7, offset: 3682 },
              end: { line: 116, column: 45, offset: 3720 },
            },
          },
        ],
        position: {
          start: { line: 116, column: 1, offset: 3676 },
          end: { line: 116, column: 46, offset: 3721 },
        },
        data: { hName: 'act', hProperties: {} },
      },
      {
        type: 'leafDirective',
        name: 'scene',
        attributes: {},
        children: [
          {
            type: 'text',
            value: '〃、主人公の表明が受け入れられ、安堵する >>> 安堵',
            position: {
              start: { line: 118, column: 9, offset: 3731 },
              end: { line: 118, column: 36, offset: 3758 },
            },
          },
        ],
        position: {
          start: { line: 118, column: 1, offset: 3723 },
          end: { line: 118, column: 37, offset: 3759 },
        },
        data: { hName: 'scene', hProperties: {} },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '液晶ディスプレイには、猫娘を擁護するコメントや、意見は合わないけれど理解できるというコメントが流れる。コメントに、いいね、が続く。',
            position: {
              start: { line: 120, column: 1, offset: 3761 },
              end: { line: 120, column: 66, offset: 3826 },
            },
          },
        ],
        position: {
          start: { line: 120, column: 1, offset: 3761 },
          end: { line: 120, column: 66, offset: 3826 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '立ち飲み屋は、そういうことなら一理あるかも知れない、という雰囲気になってきて、いいねと口に出す客もいる。よくねぇよと言う客もいるけれど、熱狂ではない。',
            position: {
              start: { line: 122, column: 1, offset: 3828 },
              end: { line: 122, column: 76, offset: 3903 },
            },
          },
        ],
        position: {
          start: { line: 122, column: 1, offset: 3828 },
          end: { line: 122, column: 76, offset: 3903 },
        },
      },
      {
        type: 'leafDirective',
        name: 'scene',
        attributes: {},
        children: [
          {
            type: 'text',
            value: '〃、逡巡の後、元の世界に戻る >>> 心配と応援',
            position: {
              start: { line: 124, column: 9, offset: 3913 },
              end: { line: 124, column: 33, offset: 3937 },
            },
          },
        ],
        position: {
          start: { line: 124, column: 1, offset: 3905 },
          end: { line: 124, column: 34, offset: 3938 },
        },
        data: { hName: 'scene', hProperties: {} },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '金属のシャッターがガラガラと開く音が聞こえた。後ろを振り返ると、駅が開いている。',
            position: {
              start: { line: 126, column: 1, offset: 3940 },
              end: { line: 126, column: 41, offset: 3980 },
            },
          },
        ],
        position: {
          start: { line: 126, column: 1, offset: 3940 },
          end: { line: 126, column: 41, offset: 3980 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              'ここに残れば、英雄とはいかないまでも、勇気ある配信者でいられる。あの改札を抜ければ、誰にも覚えられていない負け犬に逆戻りだろう。',
            position: {
              start: { line: 128, column: 1, offset: 3982 },
              end: { line: 128, column: 65, offset: 4046 },
            },
          },
        ],
        position: {
          start: { line: 128, column: 1, offset: 3982 },
          end: { line: 128, column: 65, offset: 4046 },
        },
      },
      {
        type: 'paragraph',
        children: [
          { type: 'text', value: '「最初のとき、私は逃げ出したんです」' },
          { type: 'break' },
          {
            type: 'text',
            value:
              '「そんなことはいいんだ。推しは推せるうちに推せばいい。ファンには感謝できるときに感謝すればいい。順番はどっちでもいいんじゃないかな。俺にもよく分かんねぇんだけど」',
          },
        ],
        position: {
          start: { line: 130, column: 1, offset: 4048 },
          end: { line: 131, column: 82, offset: 4148 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value: '右隣の男はグラスに口をつけ、それから黙った。',
            position: {
              start: { line: 133, column: 1, offset: 4150 },
              end: { line: 133, column: 23, offset: 4172 },
            },
          },
        ],
        position: {
          start: { line: 133, column: 1, offset: 4150 },
          end: { line: 133, column: 23, offset: 4172 },
        },
      },
      {
        type: 'paragraph',
        children: [
          {
            type: 'text',
            value:
              '私は改札を通り抜けて、ホームに上がる。明るくなった商店街に目を向けると立ち飲み屋は見当たらず、小さな駅の隣には不釣り合いなタワーマンションがそびえている。',
            position: {
              start: { line: 135, column: 1, offset: 4174 },
              end: { line: 135, column: 78, offset: 4251 },
            },
          },
        ],
        position: {
          start: { line: 135, column: 1, offset: 4174 },
          end: { line: 135, column: 78, offset: 4251 },
        },
      },
    ],
    position: {
      start: { line: 1, column: 1, offset: 0 },
      end: { line: 136, column: 1, offset: 4252 },
    },
  },
};
