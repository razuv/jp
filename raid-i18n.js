'use strict';
const RaidI18n=(()=>{
const dictionary=new Map();
function add(ru,en,ja){if(ru&&en&&ja)dictionary.set(ru,{en,ja});}
const rows=`
Твоё путешествие по Японии|Your journey through Japan|日本を旅しよう
Куда прилетаешь|Arrival city|到着する街
Откуда вылетаешь обратно|Return departure city|帰国便の出発地
Аэропорт прибытия|Arrival airport|到着空港
Аэропорт вылета|Departure airport|出発空港
Выбери одного героя города прилёта|Choose one hero from your arrival city|到着する街の英雄を1人選ぶ
Бюджет внутри Японии, ¥|Budget in Japan, ¥|日本国内の予算（円）
Один|Solo|ひとり
Вместе|Together|一緒に
Сколько вас|Travellers|旅行人数
Количество путешественников|Number of travellers|旅行人数
Что хочется открыть|What would you like to discover?|旅で楽しみたいこと
Шопинг|Shopping|買い物
Гулять|Walks|街歩き
Храмы|Temples & shrines|寺社めぐり
Музеи|Museums|美術館・博物館
Гастрономия|Food|グルメ
Онсены|Onsen|温泉
В путь|Let's go|出発しよう
Начать всё сначала|Start over|最初から始める
Сначала|Restart|最初から
Путешественник|Traveller|旅人
Общая сумма|Total budget|合計予算
на одного|for one|1人分
на 2 чел.|for 2 people|2人分
14 дней|14 days|14日間
Курс недоступен. Бюджет сохраняется в йенах.|Exchange rate unavailable. Your budget stays in yen.|為替レートを取得できません。予算は円で保存されます。
Загружаем курс валют…|Loading exchange rates…|為替レートを読み込み中…
Курс|Exchange rate|為替レート
Кэш|Cached|キャッシュ
Схема переезда между транспортными узлами|Schematic transfer between transport hubs|交通拠点間の概略ルート
Через ближайший транспортный узел · схема переезда|Via a nearby transport hub · schematic transfer|近くの交通拠点経由・概略ルート
Завершить путешествие|Finish the journey|旅を終える
обратный вылет|return flight|帰国便
Прибыть:|Arrive in:|到着：
Выберите 3 карты из 5|Choose 3 of 5 cards|5枚から3枚選ぶ
Ваша первая колода|Your first deck|最初のデッキ
Новые карты города|New cards for this city|この街の新しいカード
В бой|Battle|バトルへ
Выбрать|Choose|選ぶ
Выбрана|Selected|選択済み
Разыграть|Play|プレイ
Здоровье полное|Health is full|体力は満タン
Нужен союзник|An ally is needed|味方が必要
Поле заполнено|Board is full|盤面がいっぱい
Восстановление|Recovery|回復
Бафф отряда · один удар|Squad buff · one attack|部隊強化・次の攻撃
Провокация|Taunt|挑発
Предсмертный хрип|Deathrattle|断末魔
Боевой клич|Battlecry|雄叫び
Божественный щит|Divine Shield|聖なる盾
Похищение жизни|Lifesteal|生命奪取
Щит|Shield|シールド
История|History|歴史
Огни|City lights|街の光
Ритм|Travel|旅
Глава|Chapter|第
Конец хода|End turn|ターン終了
Ход противника…|Enemy turn…|敵のターン…
Следующая атака|Next attack|次の攻撃
Мой ход|My turn|自分のターンへ
Следующий удар отряда|Next squad attack|次の部隊攻撃
Новые карты|New cards|新しいカード
Колода|Deck|デッキ
Закрыть колоду|Close deck|デッキを閉じる
Кто этот злодей?|Who is this villain?|このボスは誰？
Маршрут пройден!|Journey complete!|旅を達成！
Город ваш!|City cleared!|街をクリア！
Время восстановиться|Time to recover|ひと休みしよう
Карты закончились.|No cards left.|カードがなくなった。
Открой новую сторону города и вернись с силами.|Discover a new side of the city and return refreshed.|街の新しい一面を見つけて、元気を取り戻そう。
У босса осталось|The boss has|ボスの残り体力：
здоровья. Открой|health. Discover|。発見しよう：
здоровья.|health.|体力。
Следующий город|Next city|次の街へ
Итоги путешествия|Journey results|旅の結果
К обратному вылету|To the return flight|帰国便へ
Бюджет поездки|Trip budget|旅の予算
Повторить бой|Retry battle|再挑戦
Вернуться на маршрут|Return to the route|旅のルートに戻る
получен. Герой у станции отправления.|earned. Your hero is at the departure station.|獲得。英雄は出発駅に到着した。
Бейдж|Badge|バッジ
босс побеждён|boss defeated|ボスを撃破
На передышку|Take a break|ひと休みする
Вернуться к боссу|Return to the boss|ボスに戻る
НОВАЯ ОСТАНОВКА|NEW STOP|新しい寄り道
Новая карта в руке. У босса по-прежнему|A new card in hand. Impressions still needed:|新しいカードを入手。クリアまであと
Все остановки этого города открыты. Можно собрать новое путешествие.|All recovery stops in this city are unlocked. You can start a new journey.|この街の休憩スポットはすべて訪れた。新しい旅を始めよう。
Новый маршрут|New journey|新しい旅
Расход — плановый резерв на всю группу. Лечение и знакомства — игровые события.|Costs are planning reserves for the whole group. Healing and encounters are game events.|費用はグループ全員分の予算目安。回復と出会いはゲーム内の出来事です。
Плановый расход, ¥ / чел.|Planned cost, ¥ / person|予算目安（円・1人）
Плановый расход на всю группу|Planned cost for the whole group|グループ全員分の予算目安
План|Planned|予定額
Очки путешествия|Journey points|旅のポイント
Карты и остановки|Cards and stops|カードと寄り道
План поездки|Trip estimate|旅の見積もり
Расходы и настройки расчёта|Expenses and estimate settings|支出と見積もり設定
Расходы по картам и остановкам|Card and recovery expenses|カードと休憩の費用
Изменить состав сметы|Adjust estimate|見積もりを調整
Плановые ставки: замените их ценами своих бронирований. Международные перелёты добавляйте отдельно.|Planning assumptions: replace them with your booking prices. Add international flights separately.|目安の金額は予約時の価格に置き換えてください。国際線は別途加算します。
За что начислены очки|How points were earned|ポイントの内訳
Пройти ещё раз с другим бюджетом|Play again with a different budget|予算を変えてもう一度
На 20% меньше|20% less|20%減らす
С этим бюджетом|Same budget|同じ予算
На 20% больше|20% more|20%増やす
В бюджете · запас|Within budget · remaining|予算内・残り
Выше бюджета на|Over budget by|予算超過
Проживание|Accommodation|宿泊
Питание|Food|食費
Городской транспорт|Local transport|市内交通
Междугородние переезды|Intercity transfers|都市間の移動
Покупки и прочее|Shopping and extras|買い物・その他
Бюджет всей поездки, ¥|Total trip budget, ¥|旅全体の予算（円）
Человек|People|人数
Дней|Days|日数
Номер за ночь, ¥|Room per night, ¥|1室1泊（円）
Питание на человека / день, ¥|Food per person / day, ¥|1人1日の食費（円）
Городской транспорт на человека / день, ¥|Local transport per person / day, ¥|1人1日の市内交通費（円）
Все переезды по Японии, ¥|All transfers in Japan, ¥|日本国内の移動費（円）
Покупки и прочее, ¥|Shopping and extras, ¥|買い物・その他（円）
Плановые расходы выбранных карт и остановок. Бесплатные игровые встречи не добавляют йен.|Planned expenses for played cards and stops. Free game encounters add no yen.|選んだカードと寄り道の予算目安。無料のゲームイベントには費用がかかりません。
Маршрут можно пересобрать.|You can rebuild the journey.|旅を組み直せます。
Передышка|A breather|ひと休み
Принять условия и переиграть|Accept and play again|この条件でもう一度
Меньше дней, тот же маршрут|Fewer days, same route|同じルートで日数を短縮
Та же длительность, новые лимиты|Same duration, new limits|同じ日数で上限を変更
Один город, без дальних переездов|One city, no long transfers|1都市で長距離移動なし
Ставки за день и резерв на впечатления сохранены.|Daily rates and the experience reserve are unchanged.|1日あたりの金額と体験の予算は維持します。
Лимиты расходов для поиска бронирований; это не найденные цены.|Spending limits for booking searches, not quoted offers.|予約を探すための支出上限であり、実際の予約価格ではありません。
Новый маршрут останется в стартовом городе; междугородние переезды исключены.|The new trip stays in the arrival city, without intercity transfers.|到着する街だけを巡り、都市間移動は行いません。
Фото и значение:|Photo and meaning:|写真と説明：
Загружаем реальное изображение…|Loading a real image…|実際の写真を読み込み中…
Изображение сейчас недоступно. Справка сохранена.|Image unavailable. The description is still available.|写真は取得できませんが、説明は表示できます。
Фото сейчас недоступно. Справка о месте сохранена.|Photo unavailable. The place description is still available.|写真は取得できませんが、場所の説明は表示できます。
Закрыть справку|Close details|説明を閉じる
Источник изображения и авторство|Image source and attribution|写真の出典・クレジット
Источник и авторство фотографии|Photo source and attribution|写真の出典・クレジット
Ваше положение на маршруте|Your position on the journey|旅の現在地
Бафф выбранного героя|Selected hero's buff|選んだ英雄の能力
Герои города|City heroes|街の英雄
Кто едет|Travel party|旅行メンバー
Интересы в путешествии|Travel interests|旅の興味
Карты в руке|Cards in hand|手札
Бейджи городов|City badges|街のバッジ
Создание игрока|Player setup|プレイヤー設定
Полноэкранная 3D-карта путешествия|Full-screen 3D journey map|全画面の3D旅行マップ
+1 к удару отряда|+1 squad damage|部隊のダメージ+1
Первый розыгрыш: добор|First play: draw a card|最初のプレイで1枚引く
+6 здоровья|+6 health|体力+6
Отряд наносит на 1 урона больше каждый ход.|The squad deals 1 extra damage each turn.|毎ターン、部隊のダメージが1増える。
Первая сыгранная карта каждого хода добирает ещё одну карту.|The first card played each turn draws another card.|各ターンの最初のカードを使うと、さらに1枚引く。
В каждом городе герой начинает бой с 6 дополнительными единицами здоровья.|Your hero starts every city battle with 6 extra health.|各都市のバトル開始時に英雄の体力が6増える。
Противник сначала атакует эту карту. Герой не получает прямой урон, пока она на столе.|The enemy attacks this card first. It protects your hero from direct damage while on the board.|敵はこのカードを優先して攻撃する。盤面にいる間、英雄への直接ダメージを防ぐ。
При гибели восстанавливает герою 5 здоровья.|On death, restores 5 health to your hero.|倒されると英雄の体力を5回復する。
При выходе на стол добирает карту и восстанавливает герою 3 здоровья.|When played, draws a card and restores 3 health to your hero.|登場時に1枚引き、英雄の体力を3回復する。
Первое попадание по этой карте поглощается полностью.|Absorbs the first hit against this card.|このカードへの最初の攻撃を無効化する。
Каждая атака этой карты восстанавливает герою 2 здоровья.|Each attack restores 2 health to your hero.|攻撃するたびに英雄の体力を2回復する。
Щит поглотил удар|Shield absorbed the hit|シールドで攻撃を無効化
Урон отряда в этот ход снижен на 2.|Squad damage is reduced by 2 this turn.|このターンの部隊ダメージが2減る。
Один добор после атаки пропускается.|Skip one draw after attacking.|攻撃後のドローを1回スキップする。
В следующий ход на 1 ману меньше.|One less mana next turn.|次のターンのマナが1減る。
Противник наносит на 2 урона больше.|The enemy deals 2 extra damage.|敵のダメージが2増える。
Отряд теряет 1 здоровье на каждой карте.|Each ally loses 1 health.|味方全員の体力が1減る。
Ваш отряд наносит на 2 урона меньше в этом ходу.|Your squad deals 2 less damage this turn.|このターンの部隊ダメージが2減る。
После удара все ваши союзники теряют 1 здоровья.|After the attack, all allies lose 1 health.|攻撃後、味方全員の体力が1減る。
После ответа злодея восстановите 3 здоровья и доберите карту.|After the boss attacks, recover 3 health and draw a card.|ボスの攻撃後、体力を3回復し、カードを1枚引く。
Незапланированные покупки: +¥ 1 200 на человека к расходам и на 1 ману меньше в следующий ход.|Unplanned shopping: +¥1,200 per person in expenses and 1 less mana next turn.|予定外の買い物：1人1,200円を加算し、次のターンのマナが1減る。
Прогулка затянулась: один добор после атаки пропускается.|The walk ran long: skip one draw after attacking.|散歩が長引いた：攻撃後のドローを1回スキップする。
Подъём забрал силы: в следующий ход на 1 ману меньше.|The climb was tiring: 1 less mana next turn.|階段で疲れた：次のターンのマナが1減る。
Засмотрелись на экспонаты: урон отряда в этом ходу снижен на 2.|Lost in the exhibition: squad damage is reduced by 2 this turn.|展示に夢中：このターンの部隊ダメージが2減る。
Дополнительный заказ: +¥ 1 800 на человека к расходам, после ответа босса восстановите 3 здоровья.|An extra dish: +¥1,800 per person; recover 3 health after the boss attacks.|追加注文：1人1,800円を加算。ボスの攻撃後に体力を3回復する。
Перерыв затянулся: на 1 ману меньше в следующий ход, после ответа босса восстановите 3 здоровья.|A longer soak: 1 less mana next turn; recover 3 health after the boss attacks.|長湯した：次のターンのマナが1減る。ボスの攻撃後に体力を3回復する。
Чемодан не закрывается|The suitcase won't close|スーツケースが閉まらない
Ещё одна красивая улочка|Just one more pretty street|もう一つの素敵な路地
Лестница к храму|The temple staircase|お寺への階段
Залип на выставке|Lost in the exhibition|展示に夢中
Заказал ещё одно блюдо|One more dish|もう一品注文
Из онсена не хочется выходить|Can't leave the onsen|温泉から出たくない
Омакасе · ужин у шефа|Omakase · chef's dinner|おまかせ・料理人の夕食
Омакасе|Omakase|おまかせ
Чай от нового знакомого|Tea with a new friend|新しい知り合いとお茶
Разделили онигири|Sharing an onigiri|おにぎりのおすそ分け
Случайная встреча за чаем|A chance encounter over tea|お茶で偶然の出会い
Меню доверяют шефу. Игровой ужин восстанавливает 22 здоровья. Это формат опыта, а не бронь конкретного ресторана.|Let the chef choose. This game dinner restores 22 health. It represents an experience, not a restaurant booking.|料理人におまかせ。ゲーム内の夕食で体力を22回復。体験を表し、特定の店の予約ではありません。
Случайная игровая встреча: новый знакомый угощает чаем.|A random game encounter: a new friend offers tea.|ゲーム内の偶然の出会い。新しい知り合いがお茶をごちそうしてくれる。
Случайная игровая встреча: сосед по столу поделился перекусом.|A random game encounter: a neighbour shares a snack.|ゲーム内の偶然の出会い。隣の人がおやつを分けてくれる。
Игровая пауза с меню на выбор шефа. Конкретный ресторан предстоит выбрать.|A game break with a chef-selected menu. A real restaurant is yet to be chosen.|料理人に任せるゲーム内の休憩。実際の店は後で選びます。
Сюжетная случайная встреча: местный житель пригласил выпить чаю. Это игровое событие.|A story encounter: a local invites you for tea. This is a game event.|物語上の出会い：地元の人がお茶に招待してくれる。ゲーム内の出来事です。
Небольшой бесплатный маршрут по новому району. В игре прогулка возвращает силы.|A short free walk through a new neighbourhood. In the game, walking restores energy.|新しい地区を無料で少し散策。ゲームでは散歩で元気を回復します。
Голден-гай|Golden Gai|ゴールデン街
Омоидэ-ёкотё|Omoide Yokocho|思い出横丁
Ходзендзи-ёкотё|Hozenji Yokocho|法善寺横丁
Накадзаки-тё|Nakazakicho|中崎町
Понто-тё|Pontocho|先斗町
Гион|Gion|祇園
Кадзуэмати|Kazuemachi|主計町
Ниси-Тяя|Nishi Chaya|にし茶屋街
Сибу-онсэн|Shibu Onsen|渋温泉
Кокубун-тё|Kokubuncho|国分町
Асамуси-онсэн|Asamushi Onsen|浅虫温泉
Даймон-ёкотё|Daimon Yokocho|大門横丁
Танукикодзи|Tanukikoji|狸小路
Пруд Сарусава|Sarusawa Pond|猿沢池
Онсэн у Кавагутико|Onsen near Kawaguchiko|河口湖の温泉
Узкие переулки маленьких баров Синдзюку.|Shinjuku's narrow lanes of tiny bars.|新宿にある小さなバーの路地。
Камерные переулки у Ходзендзи рядом с Намбой.|Intimate lanes by Hozenji near Namba.|難波近く、法善寺の落ち着いた路地。
Историческая улица ресторанов и чайных домов у Камогавы.|A historic restaurant and teahouse street by the Kamo River.|鴨川沿いの料理屋や茶屋が並ぶ歴史ある通り。
Небольшой исторический чайный район у реки Асано.|A small historic teahouse district by the Asano River.|浅野川沿いの小さな歴史ある茶屋街。
Выезд из Нагано в онсэнный посёлок Яманоути.|An excursion from Nagano to the hot-spring town of Yamanouchi.|長野から温泉の町・山ノ内へ寄り道。
Вечерний район Сэндая; остановка посвящена спокойной паузе.|Sendai's nightlife district, reimagined as a quiet game break.|仙台の夜の街で、ゲーム内では落ち着いた休憩。
Онсэнная остановка на побережье неподалёку от Аомори.|A coastal hot-spring stop near Aomori.|青森近郊、海辺の温泉でひと休み。
Переулок небольших заведений недалеко от вокзала Хакодате.|A lane of small restaurants near Hakodate Station.|函館駅近くの小さな飲食店が並ぶ横丁。
Крытая торговая улица с кафе и заведениями Саппоро.|A covered shopping arcade with cafés in Sapporo.|札幌のカフェや店が並ぶアーケード商店街。
Тихая остановка у пруда в центре Нары.|A peaceful pond-side stop in central Nara.|奈良中心部の池のほとりで静かな休憩。
Игровая онсэнная пауза в курортном районе озера; конкретный отель не выбран.|A game onsen break in the lakeside resort area; no hotel is selected.|湖畔の温泉地でゲーム内の休憩。特定の宿は選んでいません。
Фамичики и напиток: короткая остановка в FamilyMart.|Famichiki and a drink: a quick FamilyMart stop.|ファミチキと飲み物。ファミリーマートでひと休み。
Онигири и перекус в 7-Eleven перед следующим переходом.|Onigiri and a snack at 7-Eleven before the next leg.|次の移動の前にセブン-イレブンでおにぎりと軽食。
Караагэ-кун и небольшой перекус в Lawson.|Kara-age Kun and a small snack at Lawson.|ローソンでからあげクンと軽食。
Указан редактируемый резерв на человека, не цена набора в магазине.|This is an editable per-person planning reserve, not a store's meal price.|表示額は変更可能な1人分の予算目安で、店のセット価格ではありません。
FamilyMart|FamilyMart|ファミリーマート
7-Eleven|7-Eleven|セブン-イレブン
Lawson|Lawson|ローソン
`;
for(const row of rows.trim().split('\n'))add(...row.split('|'));
const cityNames={osaka:['Osaka','大阪'],kyoto:['Kyoto','京都'],nagano:['Nagano','長野'],kanazawa:['Kanazawa','金沢'],sendai:['Sendai','仙台'],aomori:['Aomori','青森'],hakodate:['Hakodate','函館'],sapporo:['Sapporo','札幌'],tokyo:['Tokyo','東京'],nara:['Nara','奈良'],kawaguchiko:['Kawaguchiko / Fuji','河口湖・富士山']};
const placeNames={
osaka:['道頓堀','大阪城','梅田スカイビル','四天王寺','新世界'],kyoto:['伏見稲荷大社','清水寺','金閣寺','錦市場','嵐山'],nagano:['善光寺','戸隠神社','長野県立美術館','戸隠そば','仲見世'],kanazawa:['兼六園','ひがし茶屋街','長町','近江町市場','金沢21世紀美術館'],sendai:['瑞鳳殿','青葉城','大崎八幡宮','定禅寺通','牛タン'],aomori:['ねぶたの家 ワ・ラッセ','三内丸山遺跡','アスパム','A-FACTORY','青森湾'],hakodate:['五稜郭','元町','函館山','函館朝市','赤レンガ倉庫'],sapporo:['大通公園','札幌時計台','すすきの','札幌ラーメン','藻岩山'],tokyo:['東京タワー','浅草寺','明治神宮','渋谷スクランブル交差点','秋葉原'],nara:['東大寺','春日大社','ならまち','奈良公園','興福寺'],kawaguchiko:['河口湖','大石公園','久保田一竹美術館','河口湖富士山パノラマロープウェイ','忠霊塔']};
const heroNames={osaka:['豊臣秀吉','福澤諭吉','緒方洪庵'],kyoto:['紫式部','織田信長','桓武天皇'],nagano:['真田信之','佐久間象山','真田信政'],kanazawa:['前田利家','鈴木大拙','まつ'],sendai:['伊達政宗','支倉常長','土井晩翠'],aomori:['津軽信枚','棟方志功','成田亨'],hakodate:['土方歳三','武田斐三郎','高田屋嘉兵衛'],sapporo:['島義勇','ウィリアム・クラーク','新渡戸稲造'],tokyo:['徳川家康','葛飾北斎','渋沢栄一'],nara:['元明天皇','鑑真','行基'],kawaguchiko:['葛飾北斎','歌川広重','久保田一竹']};
const bosses={osaka:['Neon Runner','ネオンランナー'],kyoto:['Tengu of Higashiyama','東山の天狗'],nagano:['Snow Guardian','雪の守り神'],kanazawa:['Golden Samurai','黄金の侍'],sendai:['Crescent Shadow','三日月の影'],aomori:['Nebuta Lantern Oni','ねぶた提灯の鬼'],hakodate:['Night Harbour Kraken','夜の港のクラーケン'],sapporo:['Snow Golem','雪のゴーレム'],tokyo:['Godzilla','ゴジラ'],nara:['Deer King','鹿の王'],kawaguchiko:['Guardian of Misty Fuji','霧の富士の守護者']};
function catalog(R,H){for(const [city,d] of Object.entries(R.cities)){
 const names=cityNames[city]||(/Фукуока/.test(d.name)?['Fukuoka','福岡']:[d.name,d.jp]);add(d.name,...names);if(bosses[city])add(d.boss,...bosses[city]);
 for(const c of Object.values(R.cards).filter(c=>c.city===city&&!c.encounter&&!c.recovery)){
  const index=Number(c.id.split('-').at(-1)),ja=c.heroSite?jpPlaces[c.wiki]||c.wiki:placeNames[city]?.[index]||c.wiki;add(c.name,c.wiki||c.name,ja||c.name);
  if(!dictionary.has(c.meaning)){const detail=meanings[city]?.[index];if(detail&&!c.heroSite)add(c.meaning,...detail);else if(c.heroSite){const h=H.choices(city,R.heroes[city])[index];add(c.meaning,`A stop linked to ${h?.wiki||names[0]} in ${names[0]}. ${siteNotes[c.wiki]?.[0]||'The hero adds this place to your city choices.'}`,`${names[1]}の${heroNames[city]?.[index]||'英雄'}にゆかりのある場所。${siteNotes[c.wiki]?.[1]||'英雄がこの場所を街の候補に加える。'}`);}}
 }
 H.choices(city,R.heroes[city]).forEach((h,i)=>{add(h.name,h.wiki,heroNames[city]?.[i]||h.wiki);if(heroBios[city]?.[i])add(h.bio,...heroBios[city][i]);});
 const lore=R.cityLore[city];if(lore&&loreText[city]){add(lore[0],...loreText[city][0]);add(lore[1],...loreText[city][1]);}
 (R.mishaps[city]||[]).forEach((m,i)=>{if(mishapNames[city]?.[i])add(m[0],...mishapNames[city][i]);const canonical=R.events[m[2]].text,translated=dictionary.get(canonical);if(translated)add(m[1],translated.en,translated.ja);});
 }}
const jpPlaces={'Osaka Castle':'大阪城','Tekijuku':'適塾','Kyoto Imperial Palace':'京都御所','Honnō-ji':'本能寺','Heian Shrine':'平安神宮','Matsushiro Castle':'松代城','Matsushiro, Nagano':'松代','Kanazawa Castle':'金沢城','D. T. Suzuki Museum':'鈴木大拙館','Oyama Shrine (Kanazawa)':'尾山神社','Zuihōden':'瑞鳳殿','Sendai City Museum':'仙台市博物館','Bansui Sōdō':'晩翠草堂','Port of Aomori':'青森港','Aomori Museum of Art':'青森県立美術館','Goryōkaku':'五稜郭','Port of Hakodate':'函館港','Odori Park':'大通公園','Hokkaido University':'北海道大学','Sapporo Agricultural College':'札幌農学校','Edo Castle':'江戸城','Sumida Hokusai Museum':'すみだ北斎美術館','Shibusawa Memorial Museum':'渋沢史料館','Heijō Palace':'平城宮','Tōshōdai-ji':'唐招提寺','Tōdai-ji':'東大寺','Lake Kawaguchi':'河口湖','Oishi Park':'大石公園','Itchiku Kubota Art Museum':'久保田一竹美術館'};
const siteNotes={'Kyoto Imperial Palace':['This is a themed walk through courtly Kyoto; the present palace is not Murasaki’s preserved home.','宮廷の京都をたどる散策。現在の御所は紫式部の住居が残ったものではありません。'],'Honnō-ji':['The temple was relocated after the events of 1582.','1582年の事件後、現在地に移されました。']};
const meanings={
osaka:[['Osaka’s neon canal and lively evening street.','大阪のネオン輝く運河と夜の街。'],['A museum tower and park on the site of Hideyoshi’s castle.','秀吉の城跡にある博物館の天守と公園。'],['Twin towers with an observation deck above Umeda.','梅田を見渡す展望台を備えた2棟のタワー。'],['One of Japan’s oldest Buddhist temple complexes.','日本最古級の仏教寺院の一つ。'],['A retro district around Tsutenkaku, known for signs and kushikatsu.','通天閣のある、看板と串カツで知られるレトロな街。']],
kyoto:[['A Shinto shrine with paths of red torii gates.','朱色の鳥居の道が続く神社。'],['A Buddhist temple with a wooden terrace overlooking Higashiyama.','東山を望む木造の舞台がある寺院。'],['A golden pavilion reflected in its garden pond.','庭園の池に姿を映す金色の舎利殿。'],['A historic food market in central Kyoto.','京都中心部の歴史ある食の市場。'],['A riverside area with bamboo groves and temples.','竹林や寺院がある川沿いの地域。']],
nagano:[['Nagano’s major Buddhist temple and its old shopping approaches.','長野を代表する寺院と門前の参道。'],['Mountain shrines in the area around Nagano.','長野近郊の山にある神社群。'],['The prefectural art museum near Zenkoji.','善光寺近くの県立美術館。'],['Regional buckwheat noodles; the image shows soba.','地域のそば。写真はそば料理の例。'],['Shops on the approach to Zenkoji; the image shows the temple area.','善光寺参道の店。写真は寺院周辺の様子。']],
kanazawa:[['A landscape garden with ponds, bridges and winter snow supports.','池や橋、冬の雪吊りが美しい庭園。'],['A historic teahouse district with craft shops.','工芸品の店も並ぶ歴史ある茶屋街。'],['A district of former samurai residences.','かつての武家屋敷が残る地区。'],['A central market known for seafood.','海産物で知られる中心部の市場。'],['A contemporary art museum in a circular building.','円形の建物が特徴の現代美術館。']],
sendai:[['Date Masamune’s mausoleum among tall trees.','高い木々に囲まれた伊達政宗の霊廟。'],['The castle site associated with the founding of Sendai.','仙台藩の成立に関わる城跡。'],['An elaborately decorated Shinto shrine.','華やかな装飾を持つ神社。'],['A city boulevard lined with zelkova trees.','ケヤキ並木が続く街の通り。'],['A local beef-tongue dish; the image shows the food.','地域の牛タン料理。写真は料理の例。']],
aomori:[['A museum of enormous Nebuta festival figures; the festival itself is in summer.','大型ねぶたを展示する施設。祭り自体は夏に開催。'],['An archaeological site of the Jomon culture.','縄文文化の考古遺跡。'],['A triangular landmark by Aomori’s waterfront.','青森の海辺にある三角形のランドマーク。'],['A space for apple products and local souvenirs.','りんご商品や地元の土産を扱う施設。'],['A waterfront view towards Mutsu Bay.','陸奥湾に面する街の海辺の風景。']],
hakodate:[['A star-shaped fort and observation tower.','星形の城郭と展望タワー。'],['Historic streets on the slopes above the port.','港を見下ろす坂に広がる歴史ある街並み。'],['A mountain viewpoint above Hakodate.','函館を見渡す山の展望スポット。'],['A morning market near Hakodate Station.','函館駅近くの朝市。'],['Historic red-brick warehouses by the harbour.','港に並ぶ歴史ある赤レンガ倉庫。']],
sapporo:[['A long park through central Sapporo.','札幌中心部を横切る長い公園。'],['The historic clock tower built for the agricultural college.','農学校のために建てられた歴史ある時計台。'],['A district of glowing signs and restaurants.','看板の光や飲食店が集まる地区。'],['Miso ramen is one of Sapporo’s well-known foods.','味噌ラーメンは札幌の名物の一つ。'],['An observation mountain above the city.','街を見渡せる展望スポットの山。']],
tokyo:[['A red-and-white television tower with observation decks.','赤と白のテレビ塔と展望台。'],['A Buddhist temple in Asakusa.','浅草の仏教寺院。'],['A Shinto shrine in wooded grounds near Harajuku.','原宿近くの森に囲まれた神社。'],['The famous pedestrian crossing at Shibuya Station.','渋谷駅前の有名なスクランブル交差点。'],['A district of electronics, games and pop culture.','電気製品、ゲーム、ポップカルチャーの街。']],
nara:[['The temple of the Great Buddha in Nara.','奈良の大仏で知られる寺。'],['A shrine with many stone and bronze lanterns.','多くの石灯籠と釣燈籠がある神社。'],['Nara’s old merchant district.','奈良の古い商人の街。'],['A park with deer and paths between temples.','鹿が暮らし、寺社をつなぐ道がある公園。'],['A Buddhist temple complex in the historic centre.','歴史地区の仏教寺院。']],
kawaguchiko:[['A lakeshore with views of Fuji; visibility depends on the weather.','富士山を望む湖畔。見え方は天候によります。'],['The northern shore of Lake Kawaguchi with views of the lake and Fuji.','河口湖北岸から湖と富士山を望む公園。'],['A museum of textile artist Itchiku Kubota by the northern lakeshore.','北岸にある染色家・久保田一竹の美術館。'],['A ropeway to a viewpoint above the lake; operation depends on weather.','湖を見下ろす展望台へのロープウェイ。運行は天候によります。'],['A Fuji viewpoint in Arakurayama Sengen Park in neighbouring Fujiyoshida.','隣の富士吉田市、 新倉山浅間公園の富士山ビューポイント。']]
};
const heroBios={
osaka:[['Started construction of Osaka Castle in 1583.','1583年に大阪城の築城を始めた。'],['Studied at Osaka’s Tekijuku school.','大阪の適塾で学んだ。'],['Physician who founded Tekijuku in Osaka.','大阪で適塾を開いた医師。']],
kyoto:[['Kyoto court writer and author of The Tale of Genji.','宮廷の作家で『源氏物語』の作者。'],['A sixteenth-century warlord whose Nijo residence was in Kyoto.','京都に二条の居所を構えた16世紀の武将。'],['Moved the imperial court to Heian-kyo, later Kyoto, in 794.','794年、後の京都となる平安京に遷都した。']],
nagano:[['Ruler of Matsushiro, now part of Nagano city.','現在の長野市にある松代の藩主。'],['A nineteenth-century scholar and thinker from Matsushiro.','松代出身の19世紀の学者・思想家。'],['The second ruler of the Matsushiro domain.','松代藩の第2代藩主。']],
kanazawa:[['A ruler connected to Kanazawa Castle and the Kaga domain.','金沢城と加賀藩に関わる武将。'],['A Buddhist philosopher from Kanazawa, where his museum stands.','金沢出身の仏教思想家。市内に記念館がある。'],['Maeda Toshiie’s wife, enshrined with him at Oyama Shrine.','前田利家の妻。尾山神社に利家と共に祀られる。']],
sendai:[['Founder of the Sendai domain; his mausoleum is Zuihoden.','仙台藩の初代藩主。瑞鳳殿に眠る。'],['Date Masamune’s envoy who led a mission from Sendai to Europe.','仙台藩からヨーロッパへの使節団を率いた伊達政宗の使者。'],['A poet born in Sendai; his home Bansui Sodo is preserved.','仙台生まれの詩人。住居の晩翠草堂が残る。']],
aomori:[['Development of Aomori’s town and port began under his rule in the seventeenth century.','17世紀、その治世に青森の町と港の整備が始まった。'],['A woodblock-print artist born in Aomori city.','青森市生まれの版画家。'],['Kaiju artist and designer who studied in Aomori; the prefectural art museum holds his work.','青森で学んだ怪獣デザイナー。作品は県立美術館に収蔵。']],
hakodate:[['A commander in the final Boshin War battles at Hakodate.','函館で戊辰戦争の最後の戦いに参加した指揮官。'],['Scholar and designer of Hakodate’s star-shaped Goryokaku fort.','函館の星形城郭・五稜郭を設計した学者。'],['A merchant who contributed to developing Hakodate’s port.','函館港の発展に貢献した商人。']],
sapporo:[['Contributed to the early planning of Sapporo.','札幌の初期の都市計画に携わった。'],['Teacher and leader at Sapporo Agricultural College in 1876–1877.','1876〜1877年、札幌農学校で教育と運営に携わった。'],['Studied at Sapporo Agricultural College and later became a diplomat and writer.','札幌農学校で学び、後に外交官・著述家となった。']],
tokyo:[['Founder of the Tokugawa shogunate who made Edo his political centre.','江戸を政治の中心とした徳川幕府の創始者。'],['An Edo artist, author of Thirty-six Views of Mount Fuji; the Sumida Hokusai Museum is in Tokyo.','江戸の絵師で『冨嶽三十六景』の作者。東京にすみだ北斎美術館がある。'],['An entrepreneur connected to Tokyo’s modernisation; his museum is in Asukayama.','東京の近代化に関わった実業家。飛鳥山に史料館がある。']],
nara:[['The capital moved to Heijo-kyo in present-day Nara during her reign in 710.','治世の710年、現在の奈良にある平城京に遷都した。'],['A Buddhist monk who founded Toshodaiji in Nara.','奈良の唐招提寺を開いた僧。'],['A Buddhist monk connected to the construction of the Great Buddha at Todaiji.','東大寺の大仏造立に関わった僧。']],
kawaguchiko:[['Artist of Thirty-six Views of Mount Fuji. The link is his images of the mountain, not his birthplace.','『冨嶽三十六景』の作者。山の絵にちなむ英雄で、出身地を示すものではありません。'],['Artist of series of Fuji views, guiding an artistic journey around the mountain.','富士山の風景画シリーズを描いた絵師。山を巡る芸術の旅の英雄。'],['Textile artist whose museum stands by Lake Kawaguchi.','河口湖畔に美術館を作った染色家。']]
};
const loreText={
osaka:[['Hideyoshi’s walls · 1583','秀吉の城壁・1583年'],['Construction of Osaka Castle under Toyotomi Hideyoshi began in 1583.','豊臣秀吉による大阪城の築城は1583年に始まった。']],
kyoto:[['Heian capital · 794','平安の都・794年'],['In 794, the imperial court moved to Heian-kyo, the future Kyoto.','794年、朝廷は後の京都となる平安京へ移った。']],
nagano:[['Pilgrims of Zenkoji','善光寺の参拝者'],['Zenkoji is a Buddhist temple in Nagano approached through historic shopping streets.','善光寺は長野の仏教寺院で、古くからの門前町が参道に続く。']],
kanazawa:[['The Maeda legacy','前田家の遺産'],['Kanazawa Castle was a major seat of the powerful Maeda family.','金沢城は有力な前田家の重要な拠点だった。']],
sendai:[['Masamune’s crescent','政宗の三日月'],['Date Masamune was the first ruler of the Sendai domain; his mausoleum is in the city.','伊達政宗は仙台藩の初代藩主で、市内にはその霊廟がある。']],
aomori:[['Memory of Jomon','縄文の記憶'],['Sannai-Maruyama in Aomori preserves traces of a large Jomon-period settlement.','青森の三内丸山には大規模な縄文集落の跡が残る。']],
hakodate:[['Star fort · 1864','星形城郭・1864年'],['The Western-style, five-pointed Goryokaku fort was completed in 1864.','西洋式の五稜郭は1864年に完成した。']],
sapporo:[['Clock Tower · 1878','時計台・1878年'],['Sapporo’s Clock Tower building was built in 1878 for the agricultural college.','札幌時計台の建物は1878年に農学校のために建てられた。']],
tokyo:[['Traces of Edo Castle','江戸城の面影'],['Edo Castle was the Tokugawa shoguns’ seat; parts of its grounds and fortifications remain in modern Tokyo.','江戸城は徳川将軍家の居城だった。現在の東京にも敷地や城郭の一部が残る。']],
nara:[['Ancient capital · 710','古代の都・710年'],['In 710, the capital moved to Heijo-kyo in present-day Nara.','710年、都は現在の奈良にある平城京へ移った。']],
kawaguchiko:[['Fuji from the lakeshore','湖畔からの富士山'],['Winter Kawaguchiko is a place to admire snow-covered Fuji. This is not a climbing route.','冬の河口湖は雪の富士山を眺める場所。登山ルートではありません。']]
};
const mishapNames={osaka:[['Takoyaki is still lava','たこ焼き、まだ溶岩'],['Lost in Umeda Station','梅田駅で迷子']],kyoto:[['Kimono versus stairs','着物と階段の対決'],['One more torii photo','鳥居をもう1枚']],nagano:[['The soba is louder than you','そばをすする音に負けた'],['The snow was slippery','雪は滑るものだった']],kanazawa:[['Gold leaf on your nose','鼻に金箔がついた'],['Bought everything with your eyes at Omicho','近江町で目が買い物し放題']],sendai:[['Zunda failed the taste test','ずんだの味にびっくり'],['The gyutan was chewy','牛タンをかみしめる']],aomori:[['An apple the size of your backpack','リュックサイズのりんご'],['Mesmerised by a Nebuta lantern','ねぶたに見とれた']],hakodate:[['A gull stole breakfast','カモメに朝食を取られた'],['The wind gave you a new hairstyle','風が新しい髪形をくれた']],sapporo:[['Adopted by a snowdrift','雪山に家族入り'],['Ramen fogged your glasses','ラーメンで眼鏡が曇った']],tokyo:[['Natto defeated you','納豆に負けた'],['Gacha stole your attention','ガチャに夢中']],nara:[['A deer ate your itinerary','鹿が旅程を食べた'],['You bowed and the deer answered','お辞儀したら鹿が集まった']],kawaguchiko:[['Fuji hid in the clouds','富士山が雲に隠れた'],['Gloves left at the hotel','手袋をホテルに忘れた']]};
const fragments=`
Ханэда|Haneda|羽田
Нарита|Narita|成田
Кансай|Kansai|関西
Осака Итами|Osaka Itami|大阪伊丹
внутренние рейсы|domestic flights|国内線
Новый Титосэ|New Chitose|新千歳
Мацумото|Matsumoto|松本
Комацу|Komatsu|小松
Фукуока|Fukuoka|福岡
Тюбу Centrair|Chubu Centrair|中部セントレア
Токио|Tokyo|東京
Осака|Osaka|大阪
Киото|Kyoto|京都
Сэндай|Sendai|仙台
Нагано|Nagano|長野
Канадзава|Kanazawa|金沢
Аомори|Aomori|青森
Хакодате|Hakodate|函館
Саппоро|Sapporo|札幌
Нара|Nara|奈良
Через|Via|経由
через|via|経由
до Токио|to Tokyo|東京まで
до Осаки|to Osaka|大阪まで
до Саппоро|to Sapporo|札幌まで
до Хакодате|to Hakodate|函館まで
до Аомори|to Aomori|青森まで
до Канадзавы|to Kanazawa|金沢まで
до Нагано|to Nagano|長野まで
до Мацумото|to Matsumoto|松本まで
до Нары|to Nara|奈良まで
Автобус|Bus|バス
автобус|bus|バス
поезд|train|列車
схема|schematic|概略
Ваш отряд атакует, затем ходит противник|Your squad attacks, then the enemy responds|部隊が攻撃し、その後に敵のターン
атака|attack|攻撃
здоровье|health|体力
мана|mana|マナ
атаки|attack|攻撃
здоровья|health|体力
лечения|healing|回復
маны|mana|マナ
к атаке отряда|squad damage|部隊ダメージ
к атаке|damage|攻撃
к следующей атаке отряда.|to your next squad attack.|次の部隊攻撃に加算。
Усиливает следующую атаку отряда на|Boosts the next squad attack by|次の部隊攻撃を強化：
Восстанавливает|Restores|回復：
В игре:|In the game:|ゲーム内の効果：
Восстановите|Recover|回復
Нужно|Requires|必要：
 на человека| per person|（1人分）
 на | for |・
 чел.| people|人
 дн.| days|日
 ночей| nights|泊
 ном.| rooms|室
/чел. в день| / person / day|・1人1日
/ночь| / night|・1泊
 номер до | room up to |・客室上限
 питание | food |・食費
 транспорт | transport |・交通費
 переезды | transfers |・移動費
 покупки | shopping |・買い物
Бейджи|Badges|バッジ
Бюджет|Budget|予算
Очередь|Queue|行列
Задержка поезда|Train delay|列車の遅延
Похмелье|Hangover|二日酔い
Штраф за курение|Smoking fine|喫煙の罰金
Закрыто|Closed|臨時休業
Испытание ·|Challenge ·|試練・
Открытие ·|Discovery ·|発見・
Игровая неприятность ·|Game mishap ·|ゲーム内のハプニング・
Игровое испытание ·|Game challenge ·|ゲーム内の試練・
Расход — плановый резерв, а не местный тариф.|The cost is a planning reserve, not a local tariff.|費用は予算目安であり、現地の料金ではありません。
Бесплатные игровые встречи не добавляют йен.|Free game encounters add no yen.|無料のゲームイベントに費用はかかりません。
маршрут завершён. Ваш план поездки в йенах.|your journey is complete. Here is your trip estimate in yen.|旅を完了しました。円での旅の見積もりです。
Бой в городе|City battle|街のバトル
Символ:|Symbol:|シンボル：
Ход|Turn|ターン
`;
for(const row of fragments.trim().split('\n'))add(...row.split('|'));
for(const row of `Впечатления|Impressions|体験
Впечатлений до победы|Impressions to clear|クリアまでの体験
впечатлений до победы.|impressions to clear.|クリアまでの体験。
впечатления|impressions|体験
впечатлений|impressions|体験
Сложность|Complexity|難易度
сложность|complexity|難易度
стоимость|cost|費用
йен|yen|円
Силы|Energy|行動力
сил|energy|行動力
Следующие впечатления|Next impressions|次の体験
Экономия|Savings|節約
Игровая экономия:|Game savings:|ゲーム内の節約：
Не хватает йен|Not enough yen|円が足りません
Стоимость в йенах|Cost in yen|費用（円）
Расход следующего хода|Next turn's expense|次のターンの支出
Удачный маршрут|Efficient route|効率のよいルート
Выгодный финал|A rewarding finish|お得な締めくくり
Находка|Discovery|発見
Гибкий план|Flexible plan|柔軟な計画
Местные лайфхаки|Local tips|地元の知恵
Пока место активно, расходы оппонента снижены на 50%.|While this stop is active, opponent expenses are reduced by 50%.|このスポットが有効な間、相手による支出を50%減らす。
После завершения остановки: экономия ¥ 500 на человека.|When the stop ends: save ¥500 per person.|スポット終了時、1人500円を節約。
При выборе места: добор карты и экономия ¥ 300 на человека.|When played: draw a card and save ¥300 per person.|選ぶとカードを1枚引き、1人300円を節約。
Один раз защищает остановку от внезапного закрытия.|Protects the stop from an unexpected closure once.|突然の閉鎖からスポットを1回守る。
Каждый ход этого места: экономия ¥ 200 на человека.|Each turn at this stop: save ¥200 per person.|このスポットで毎ターン1人200円を節約。
+1 впечатление|+1 impression|体験+1
Первый выбор: добор|First choice: draw|最初の選択でドロー
Расходы −10%|Expenses −10%|支出−10%
Каждый ход маршрут приносит на 1 впечатление больше.|The route earns 1 extra impression each turn.|毎ターン、体験を1追加で獲得。
Первое выбранное место каждого хода открывает ещё одну карту.|The first stop chosen each turn reveals another card.|各ターンの最初のスポットで、カードをもう1枚引く。
Случайные базовые расходы оппонента снижены на 10%.|The opponent's base incidental expenses are reduced by 10%.|相手による基本の予期せぬ支出を10%減らす。
День дома|A day at home|宿で過ごす1日
Обменять дополнительную валюту|Exchange extra currency|追加で両替
Угостили в изакае|Treated at an izakaya|居酒屋でごちそうに
Остаёмся в уже оплаченном жилье вместо платных планов. Игровая экономия: ¥ 3 000 на человека.|Stay in your already-paid accommodation instead of paid activities. Game savings: ¥3,000 per person.|有料の予定をやめて、支払済みの宿で休む。ゲーム内で1人3,000円を節約。
Добавить ¥ 10 000 на человека из дополнительных денег. Общий бюджет увеличится: это не бесплатный доход.|Add ¥10,000 per person from extra funds. Your total budget increases; this is not free income.|追加資金から1人10,000円を両替。合計予算が増えます。無料の収入ではありません。
Сюжетная встреча с местными: ужин за их счёт сокращает игровой резерв расходов на ¥ 1 500 на человека.|A story encounter: locals treat you to dinner, reducing the game's expense reserve by ¥1,500 per person.|物語上の出会い。地元の人が夕食をごちそうし、ゲーム内で1人1,500円を節約。
Экономия и встречи — игровые события. Дополнительный обмен увеличивает общий бюджет.|Savings and encounters are game events. Extra currency exchange increases your total budget.|節約と出会いはゲーム内の出来事です。追加両替では合計予算が増えます。
Впечатления этого хода|This turn's impressions|このターンの体験
Один добор после остановки пропускается.|Skip one draw after a stop.|スポット後のドローを1回スキップ。
На следующий ход на|Next turn, lose|次のターン：
сил меньше.|energy.|行動力が減る。
Остановки завершаются на ход раньше.|Stops end one turn earlier.|スポットが1ターン早く終了する。
После события: экономия|After the event: save|イベント後の節約：
Открой ещё одну карту.|Draw another card.|カードをもう1枚引く。
В расход включено|The expense includes|支出に含む：
Непредвиденные расходы на маршруте.|Unexpected travel expenses.|旅の予期せぬ出費。
Расходы −50%|Expenses −50%|支出−50%
Щит сохранил остановку|Flexible plan saved the stop|柔軟な計画でスポットを維持
Экономия после остановки|Savings after the stop|スポット終了時の節約
Экономия на маршруте|Travel savings|旅の節約
Союзники на поле. Завершите ход — они атакуют.|Your stops are active. End the turn to collect impressions.|スポットが有効です。ターンを終了して体験を獲得しましょう。
Осталось ходов|Turns left|残りターン
осталось ходов|turns left|残りターン
ещё|another|残り
хода|turns|ターン
Меню доверяют шефу.|Let the chef choose the menu.|料理人におまかせ。
Ужин приносит 16 впечатлений.|Dinner grants 16 impressions.|夕食で16体験を獲得。
Это формат опыта, а не бронь конкретного ресторана.|This represents an experience, not a specific restaurant booking.|体験を表し、特定の店の予約ではありません。
В игре: экономия и бонус впечатлений на следующий ход.|In the game: savings and a bonus to next turn's impressions.|ゲーム内の効果：節約と次のターンの体験ボーナス。
В игре прогулка снижает расходы.|In the game, walking reduces expenses.|ゲームでは散歩で支出を減らせます。
Сохранённый курс|Cached exchange rate|保存済みの為替レート
Введи сумму бюджета.|Enter a budget amount.|予算額を入力してください。
Курс валют временно недоступен.|Exchange rates are temporarily unavailable.|為替レートは現在取得できません。
Выбери условия для новой попытки в пределах|Choose conditions for another run within|次の予算内で再挑戦の条件を選択：
Варианты рассчитаны по текущим выбранным впечатлениям. Новые карты меняют расходы; ставки можно уточнить по бронированиям.|Options use your current experiences. New cards change expenses; replace estimates with booking prices.|現在の体験に基づく案です。新しいカードで支出は変化します。予約価格で調整してください。
Даже короткий вариант не помещается при текущем резерве впечатлений. Ниже можно изменить число путешественников или лимиты расходов.|Even a short trip exceeds the current experience reserve. Adjust traveller count or spending limits below.|短い旅でも現在の体験予算を超えます。人数や支出上限を調整してください。
`.trim().split('\n'))add(...row.split('|'));
for(const row of `
Соберите впечатления, затем оплатите событие|Collect impressions, then pay for the event|体験を集めてからイベントの費用を支払う
Следующее дорожное событие|Next travel event|次の旅イベント
До скидок|Before discounts|割引前
Новая прогулка ·|A new walk ·|新しい散策・
Выбрано|Selected|選択済み
Предсмертный хрип ·|A rewarding finish ·|お得な締めくくり・
Победа над «|Victory over “|撃破：
». Этот бейдж остаётся у героя до конца путешествия.|”. This badge stays with your hero until the end of the journey.|。このバッジは旅の最後まで残ります。
Восстановление|Recovery|回復
Победа: 100. Места: 10 × сложность. Уникальные местные события: 5. Тактика: до 30 за короткий бой. Повторные попытки очки не дублируют.|Victory: 100. Places: 10 × complexity. Unique local discoveries: 5. Planning: up to 30 for a short encounter. Retries do not duplicate points.|クリア：100。場所：難易度×10。固有の発見：5。計画：短い挑戦で最大30。再挑戦でポイントは重複しません。
Для старого сохранения учтены только сохранившиеся победы и посещённые места.|For an older save, only recorded victories and visited places are counted.|古いセーブでは、記録済みのクリアと訪問先のみを集計します。
Прошлая попытка:|Previous run:|前回：
очков · план|points · estimate|ポイント・見積もり
`.trim().split('\n'))add(...row.split('|'));
for(const row of `
Небольшой бесплатный маршрут по новому району.|A short free walk through a new neighbourhood.|新しい地区を無料で少し散策。
До скидок|Before discounts|割引前
`.trim().split('\n'))add(...row.split('|'));
for(const row of `
Впечатления путешествия|Journey impressions|旅の体験
Как считаются впечатления|How impressions are counted|体験の集計方法
Впечатления каждого пройденного города сохраняются один раз. Повторные попытки их не дублируют. Деньги считаются отдельно по картам и событиям.|Impressions from each cleared city are recorded once. Retries do not duplicate them. Yen are counted separately from cards and events.|クリアした街の体験は1回だけ記録します。再挑戦で重複しません。費用はカードとイベントから別に集計します。
`.trim().split('\n'))add(...row.split('|'));
for(const row of `
Силы следующего хода|Next turn energy|次のターンの行動力
`.trim().split('\n'))add(...row.split('|'));
const patterns=[
[/Общая сумма на (\d+) чел\./g,(m,n,l)=>l==='ja'?`${n}人分の合計`:`Total for ${n} people`],
[/У босса осталось (\d+) впечатлений до победы\./g,(m,n,l)=>l==='ja'?`クリアまであと${n}体験。`:`${n} impressions needed to clear.`],
[/Следующие впечатления \+(\d+)/g,(m,n,l)=>l==='ja'?`次の部隊攻撃 +${n}`:`Next squad attack +${n}`],
[/Восстанавливает (\d+) здоровья\./g,(m,n,l)=>l==='ja'?`体力を${n}回復。`:`Restores ${n} health.`],
[/Глава (\d+)/g,(m,n,l)=>l==='ja'?`第${n}章`:`Chapter ${n}`]
];
let ordered=[],language='ru';
function rebuild(){ordered=[...dictionary.keys()].sort((a,b)=>b.length-a.length);}
function translate(text,lang=language){if(!text||lang==='ru')return text;const direct=dictionary.get(text);if(direct)return direct[lang]||text;let out=text;for(const [pattern,fn] of patterns)out=out.replace(pattern,(m,n)=>fn(m,n,lang));const alternatives=ordered.filter(key=>out.includes(key));if(alternatives.length){const escaped=alternatives.map(key=>key.replace(/[.*+?^${}()|[\]\\]/g,'\\$&'));out=out.replace(new RegExp(escaped.join('|'),'g'),key=>dictionary.get(key)[lang]||key);}return out;}
function install(R,H){catalog(R,H);rebuild();try{const saved=localStorage.getItem('jp-language');if(['ru','en','ja'].includes(saved))language=saved;}catch{}const control=document.createElement('nav');control.id='raid-language';control.setAttribute('aria-label','Language / Язык / 言語');control.innerHTML=['ru','en','ja'].map(code=>`<button type="button" data-language="${code}" lang="${code}" aria-pressed="${code===language}">${{ru:'RU',en:'EN',ja:'日本語'}[code]}</button>`).join('');document.body.append(control);
 const originals=new WeakMap(),attributes=new WeakMap();let scheduled=false;
 function apply(){observer.disconnect();document.documentElement.lang=language;window.JapanLocale={ru:'ru-RU',en:'en-US',ja:'ja-JP'}[language];document.title={ru:'Япония · герои путешествия',en:'Japan · Travel Heroes',ja:'日本・旅の英雄'}[language];const walk=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);let node;while(node=walk.nextNode()){if(node.parentElement?.closest('script,style,#raid-language,[data-no-translate]'))continue;const previous=originals.get(node),current=node.nodeValue;const source=previous&&current===previous.output?previous.source:current;const output=translate(source);originals.set(node,{source,output});if(current!==output)node.nodeValue=output;}
 for(const el of document.body.querySelectorAll('[aria-label],[title],[alt],[placeholder]')){if(el.closest('#raid-language,[data-no-translate]'))continue;const saved=attributes.get(el)||{};for(const attr of ['aria-label','title','alt','placeholder']){if(!el.hasAttribute(attr))continue;const current=el.getAttribute(attr),prior=saved[attr],source=prior&&current===prior.output?prior.source:current,output=translate(source);saved[attr]={source,output};if(current!==output)el.setAttribute(attr,output);}attributes.set(el,saved);}control.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.language===language)));observer.observe(document.body,{subtree:true,childList:true,characterData:true,attributes:true,attributeFilter:['aria-label','title','alt','placeholder']});scheduled=false;}
 const observer=new MutationObserver(()=>{if(!scheduled){scheduled=true;queueMicrotask(apply);}});control.querySelectorAll('button').forEach(b=>b.onclick=()=>{language=b.dataset.language;try{localStorage.setItem('jp-language',language);}catch{}apply();});apply();return {setLanguage(code){if(!['ru','en','ja'].includes(code))return;language=code;apply();},get language(){return language;}};}
rebuild();return {translate,install,dictionary,cityNames};
})();
if(typeof module!=='undefined')module.exports=RaidI18n;
if(typeof document!=='undefined')RaidI18n.install(RaidGame,RaidChampions);
