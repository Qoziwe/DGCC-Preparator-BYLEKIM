// ============================================================================
// DGCC ULTIMATE QUIZ DATABASE — PART 1 (TOPICS: W1_2, W3, W4)
// Covers 100% of Moodle Quizzes, Scenarios, and Lecture Slides (W1 to W4)
// ============================================================================

window.DGCC_QUESTIONS_PART1 = [
  // ==========================================================================
  // TOPIC 1: W1 & W2 — INTRODUCTION TO COMMUNICATION (LECTURE 1 + MOODLE)
  // ==========================================================================
  {
    id: "w1_001",
    topic: "W1_2",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W1&2 · Knowledge Check Q1 / Slide 8",
      ru: "Moodle W1&2 · Проверка знаний В1 / Слайд 8",
    },
    q: {
      en: "What is communication?",
      ru: "Что такое коммуникация?",
    },
    options: [
      {
        en: "The process of exchanging information and meaning",
        ru: "Процесс обмена информацией и смыслом",
      },
      {
        en: "Speaking continuously to another person",
        ru: "Непрерывный разговор с другим человеком",
      },
      {
        en: "Sending information without receiving a response",
        ru: "Отправка информации без получения ответа",
      },
      {
        en: "Using only written language",
        ru: "Использование только письменной речи",
      },
    ],
    correct: 0,
    explanation: {
      en: "Communication is the process of exchanging information and creating/sharing meaning through verbal or non-verbal methods between a sender and a receiver to achieve understanding.",
      ru: "Коммуникация — это процесс обмена информацией и создания/передачи смысла вербальными или невербальными методами между отправителем и получателем для достижения понимания.",
    },
  },
  {
    id: "w1_002",
    topic: "W1_2",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W1&2 · Knowledge Check Q2 / Slide 8 & 11",
      ru: "Moodle W1&2 · Проверка знаний В2 / Слайд 8 и 11",
    },
    q: {
      en: "Which element starts the communication process?",
      ru: "Какой элемент запускает (начинает) процесс коммуникации?",
    },
    options: [
      { en: "Feedback", ru: "Обратная связь (Feedback)" },
      { en: "Receiver", ru: "Получатель (Receiver)" },
      { en: "Sender", ru: "Отправитель (Sender)" },
      { en: "Noise", ru: "Шум / помехи (Noise)" },
    ],
    correct: 2,
    explanation: {
      en: "The Sender is the person (information source) who starts the communication process by creating and delivering the message.",
      ru: "Отправитель (Sender) — это источник информации, который запускает процесс коммуникации, создавая и передавая сообщение.",
    },
  },
  {
    id: "w1_003",
    topic: "W1_2",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W1&2 · Knowledge Check Q3 / Slide 20",
      ru: "Moodle W1&2 · Проверка знаний В3 / Слайд 20",
    },
    q: {
      en: "Which is an example of non-verbal communication?",
      ru: "Что из перечисленного является примером невербальной коммуникации?",
    },
    options: [
      { en: "Sending an email", ru: "Отправка электронного письма" },
      { en: "Giving a speech", ru: "Выступление с речью" },
      { en: "Nodding your head", ru: "Кивок головой" },
      { en: "Writing a report", ru: "Написание отчета" },
    ],
    correct: 2,
    explanation: {
      en: "Nodding your head is a gesture (non-verbal communication) that signals agreement without using spoken or written words.",
      ru: "Кивок головой — это жест (невербальная коммуникация), который выражает согласие без использования устных или письменных слов.",
    },
  },
  {
    id: "w1_004",
    topic: "W1_2",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W1&2 · Knowledge Check Q4 / Slide 11",
      ru: "Moodle W1&2 · Проверка знаний В4 / Слайд 11",
    },
    q: {
      en: "What is feedback in communication?",
      ru: "Что такое обратная связь (feedback) в коммуникации?",
    },
    options: [
      {
        en: "The environment where communication happens",
        ru: "Среда, в которой происходит общение",
      },
      {
        en: "The receiver's response to a message",
        ru: "Ответ (реакция) получателя на сообщение",
      },
      {
        en: "A type of communication barrier",
        ru: "Один из видов коммуникационных барьеров",
      },
      {
        en: "The message before it is sent",
        ru: "Сообщение до того, как оно было отправлено",
      },
    ],
    correct: 1,
    explanation: {
      en: "Feedback is the response from the receiver back to the sender, which shows whether the message was understood and completes the communication loop.",
      ru: "Обратная связь (Feedback) — это ответ получателя отправителю, который показывает, как было понято сообщение, и замыкает цикл коммуникации.",
    },
  },
  {
    id: "w1_005",
    topic: "W1_2",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W1&2 · Knowledge Check Q5 / Slide 13",
      ru: "Moodle W1&2 · Проверка знаний В5 / Слайд 13",
    },
    q: {
      en: "Which situation is an example of interpersonal communication?",
      ru: "Какая ситуация является примером межличностной (interpersonal) коммуникации?",
    },
    options: [
      { en: "Thinking about your future", ru: "Размышление о своем будущем" },
      { en: "Talking with your classmate", ru: "Разговор с одногруппником" },
      { en: "Writing notes privately", ru: "Ведение личных заметок для себя" },
      { en: "Reading a book alone", ru: "Чтение книги в одиночестве" },
    ],
    correct: 1,
    explanation: {
      en: "Interpersonal communication happens between two or more people (e.g., talking with your classmate).",
      ru: "Межличностная (interpersonal) коммуникация происходит между двумя или более людьми (например, разговор с одногруппником).",
    },
  },
  {
    id: "w1_006",
    topic: "W1_2",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W1&2 · Knowledge Check Q6 / Slide 15",
      ru: "Moodle W1&2 · Проверка знаний В6 / Слайд 15",
    },
    q: {
      en: "Which is an example of intrapersonal communication?",
      ru: "Что из перечисленного является примером внутриличностной (intrapersonal) коммуникации?",
    },
    options: [
      {
        en: "Discussing an assignment with your group",
        ru: "Обсуждение задания со своей группой",
      },
      {
        en: "Presenting to the class",
        ru: "Выступление с презентацией перед классом",
      },
      {
        en: "Thinking about how to solve a problem",
        ru: "Размышление про себя о том, как решить проблему",
      },
      {
        en: "Sending a message to your lecturer",
        ru: "Отправка сообщения преподавателю",
      },
    ],
    correct: 2,
    explanation: {
      en: "Intrapersonal communication is your inner dialogue—thinking, reflecting, and talking to yourself (involving only one person: you).",
      ru: "Внутриличностная (intrapersonal) коммуникация — это внутренний диалог, размышление и рефлексия наедине с самим собой (участвует только один человек).",
    },
  },
  {
    id: "w1_007",
    topic: "W1_2",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W1&2 · Knowledge Check Q7 / Slide 10 & 11",
      ru: "Moodle W1&2 · Проверка знаний В7 / Слайд 10 и 11",
    },
    q: {
      en: "What is “noise” in the communication process?",
      ru: "Что означает понятие «шум» (noise) в процессе коммуникации?",
    },
    options: [
      { en: "Only loud sounds", ru: "Только громкие физические звуки" },
      {
        en: "Anything that interferes with understanding the message",
        ru: "Всё, что мешает пониманию сообщения или искажает его",
      },
      { en: "The sender's main idea", ru: "Главная идея отправителя" },
      { en: "The receiver's feedback", ru: "Обратная связь от получателя" },
    ],
    correct: 1,
    explanation: {
      en: "Noise is anything that interrupts, interferes with, or distorts the message along the communication channel.",
      ru: "Шум (Noise) — это любой фактор, который прерывает, искажает сообщение или мешает его правильному пониманию.",
    },
  },
  {
    id: "w1_008",
    topic: "W1_2",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W1&2 · Knowledge Check Q8 / Slide 25",
      ru: "Moodle W1&2 · Проверка знаний В8 / Слайд 25",
    },
    q: {
      en: "Why is effective communication important for university students?",
      ru: "Почему эффективная коммуникация важна для студентов университета?",
    },
    options: [
      {
        en: "It helps students avoid all disagreements",
        ru: "Она помогает полностью избежать любых разногласий",
      },
      {
        en: "It helps students communicate ideas, collaborate and build relationships",
        ru: "Она помогает студентам доносить идеи, сотрудничать и строить отношения",
      },
      {
        en: "It guarantees good examination results",
        ru: "Она автоматически гарантирует отличные оценки на экзаменах",
      },
      {
        en: "It removes the need for teamwork",
        ru: "Она устраняет необходимость работать в команде",
      },
    ],
    correct: 1,
    explanation: {
      en: "Effective communication supports academic success, collaboration in group projects, clear expression of ideas, and building strong relationships.",
      ru: "Эффективная коммуникация помогает ясно выражать идеи, успешно сотрудничать в групповых проектах и выстраивать крепкие отношения.",
    },
  },
  {
    id: "w1_009",
    topic: "W1_2",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W1&2 · Knowledge Check Q9 / Slide 18–20",
      ru: "Moodle W1&2 · Проверка знаний В9 / Слайд 18–20",
    },
    q: {
      en: "A student says, “I'm fine,” but avoids eye contact and looks upset. What should you consider?",
      ru: "Студент говорит: «У меня всё нормально», но избегает зрительного контакта и выглядит расстроенным. Что вам следует учесть?",
    },
    options: [
      { en: "Only the spoken words", ru: "Только произнесенные вслух слова" },
      { en: "Only the student's grammar", ru: "Только грамматику студента" },
      {
        en: "Both verbal and non-verbal communication",
        ru: "Как вербальную, так и невербальную коммуникацию",
      },
      {
        en: "The student's academic results",
        ru: "Только академическую успеваемость студента",
      },
    ],
    correct: 2,
    explanation: {
      en: "Meaning is carried by both verbal words ('I'm fine') and non-verbal cues (avoiding eye contact, upset facial expression). When they conflict, non-verbal signals often reveal true feelings.",
      ru: "Смысл передается как вербально (словами), так и невербально (взгляд, мимика). Чтобы понять реальное состояние человека, необходимо учитывать оба типа сигналов.",
    },
  },
  {
    id: "w1_010",
    topic: "W1_2",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W1&2 · Knowledge Check Q10",
      ru: "Moodle W1&2 · Проверка знаний В10",
    },
    q: {
      en: "Which action demonstrates active communication?",
      ru: "Какое действие демонстрирует активную коммуникацию?",
    },
    options: [
      {
        en: "Checking your phone while someone is speaking",
        ru: "Проверка телефона, пока кто-то говорит",
      },
      {
        en: "Interrupting before the speaker finishes",
        ru: "Перебивание собеседника до того, как он закончит мысль",
      },
      {
        en: "Listening carefully and responding appropriately",
        ru: "Внимательное слушание и уместный ответ по существу",
      },
      {
        en: "Planning what you will say without listening",
        ru: "Обдумывание своей следующей фразы без слушания собеседника",
      },
    ],
    correct: 2,
    explanation: {
      en: "Active communication requires paying full attention to the speaker and providing appropriate feedback.",
      ru: "Активная коммуникация требует внимательного выслушивания собеседника и предоставления осмысленной обратной связи.",
    },
  },
  {
    id: "w1_011",
    topic: "W1_2",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W1&2 · Reflection Challenge",
      ru: "Moodle W1&2 · Кейс для рефлексии",
    },
    q: {
      en: "In the Moodle W1&2 Reflection Challenge, one group member rarely speaks during meetings and you assume they are uninterested, but later learn they were unsure about the instructions and afraid to ask. What is the best diagnosis and solution?",
      ru: "В кейсе рефлексии Moodle W1&2 участник группы молчит на встречах, и вы думаете, что ему всё равно, но позже выясняется, что он не понял инструкции и боялся спросить. В чем проблема и как группе следовало поступить?",
    },
    options: [
      {
        en: "False assumption from silence & lack of psychological safety; the group should clarify instructions, check understanding, and actively invite questions",
        ru: "Ложное предположение из-за молчания и страх задать вопрос; группе следовало четко прояснить инструкции, проверить понимание и безопасно вовлечь участника",
      },
      {
        en: "Technical barrier; the group should immediately remove the quiet student from the WhatsApp group",
        ru: "Технический барьер; группе следовало сразу удалить молчаливого студента из чата",
      },
      {
        en: "Intrapersonal overload; the lecturer should cancel the group assignment",
        ru: "Внутриличностная перегрузка; преподавателю следовало отменить групповое задание",
      },
      {
        en: "Silence always equals agreement, so no communication problem occurred",
        ru: "Молчание всегда означает согласие, поэтому никакой проблемы не произошло",
      },
    ],
    correct: 0,
    explanation: {
      en: "The problem was making an unverified assumption about silence and unclear instructions. The group should foster an encouraging environment, explain tasks clearly, and check understanding.",
      ru: "Проблема заключалась в неверной интерпретации молчания и неясности инструкций. Группе нужно было проверить, все ли поняли задачу, и создать дружелюбную атмосферу для вопросов.",
    },
  },
  {
    id: "w1_012",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slide 8 (What is Communication?)",
      ru: "W1&2 · Слайд 8 (Что такое коммуникация?)",
    },
    q: {
      en: "According to Slide 8, when does effective communication happen?",
      ru: "Согласно слайду 8, в какой момент происходит эффективная коммуникация?",
    },
    options: [
      {
        en: "When the receiver understands the sender's intended meaning",
        ru: "Когда получатель понимает тот смысл, который закладывал отправитель",
      },
      {
        en: "As soon as the sender presses the Send button",
        ru: "В тот момент, когда отправитель нажимает кнопку «Отправить»",
      },
      {
        en: "When the message contains advanced academic jargon",
        ru: "Когда сообщение содержит сложную академическую терминологию",
      },
      {
        en: "Only when communication takes place face-to-face",
        ru: "Только тогда, когда общение происходит лично (лицом к лицу)",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 8 highlights: 'Effective communication happens when the receiver understands the sender's intended meaning.'",
      ru: "На слайде 8 особо выделено: «Эффективная коммуникация происходит тогда, когда получатель понимает смысл, задуманный отправителем».",
    },
  },
  {
    id: "w1_013",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slide 9 (Three Purposes of Communication)",
      ru: "W1&2 · Слайд 9 (Три цели коммуникации)",
    },
    q: {
      en: "What are the three core purposes of communication shown on Slide 9, and which example matches '02 — Sharing Ideas'?",
      ru: "Каковы три основные цели коммуникации на слайде 9, и какой пример соответствует карточке «02 — Sharing Ideas»?",
    },
    options: [
      {
        en: "Sharing Information, Sharing Ideas, Creating Understanding — Example for 02: Suggesting a topic during a group project meeting",
        ru: "Обмен информацией, Обмен идеями, Создание понимания — Пример для 02: Предложение темы во время встречи по групповому проекту",
      },
      {
        en: "Encoding, Decoding, Noise — Example for 02: A lecturer explains assignment requirements",
        ru: "Кодирование, Декодирование, Шум — Пример для 02: Преподаватель объясняет требования к заданию",
      },
      {
        en: "Speaking, Writing, Gesturing — Example for 02: Discussing with lecturer on assignment details",
        ru: "Речь, Письмо, Жесты — Пример для 02: Обсуждение деталей задания с преподавателем",
      },
      {
        en: "Formal, Informal, Non-Verbal — Example for 02: Submitting a leave application",
        ru: "Формальная, Неформальная, Невербальная — Пример для 02: Подача заявления на отпуск",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 9 lists: 01 Sharing Information (lecturer explains assignment requirements), 02 Sharing Ideas (suggesting a topic during a group project meeting), and 03 Creating Understanding (discussing with lecturer on assignment details).",
      ru: "На слайде 9 даны 3 карточки: 01 Sharing Information (преподаватель объясняет требования), 02 Sharing Ideas (предложение темы на встрече группы) и 03 Creating Understanding (обсуждение деталей задания с преподавателем).",
    },
  },
  {
    id: "w1_014",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slide 10 (Shannon-Weaver's Model of Communication)",
      ru: "W1&2 · Слайд 10 (Модель коммуникации Шеннона–Уивера)",
    },
    q: {
      en: "In Shannon-Weaver's Model of Communication (Slide 10), what is the exact left-to-right sequence of the five main blocks, and what are the small sub-labels above them?",
      ru: "Какова точная последовательность пяти основных блоков слева направо в модели Шеннона–Уивера (Слайд 10) и какие мелкие подписи стоят над ними?",
    },
    options: [
      {
        en: "Sender (Information source) → Encoder (Transmitter) → Channel → Decoder (Reception) → Receiver (Destination)",
        ru: "Sender (Information source) → Encoder (Transmitter) → Channel → Decoder (Reception) → Receiver (Destination)",
      },
      {
        en: "Sender → Message → Feedback → Noise → Receiver",
        ru: "Sender → Message → Feedback → Noise → Receiver",
      },
      {
        en: "Encoder → Sender → Channel → Receiver → Decoder",
        ru: "Encoder → Sender → Channel → Receiver → Decoder",
      },
      {
        en: "Information source → Channel → Noise → Feedback → Destination",
        ru: "Information source → Channel → Noise → Feedback → Destination",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 10 shows 5 black arrows: Sender (Information source) → Encoder (Transmitter) → Channel (no top label, Noise points to it from below) → Decoder (Reception) → Receiver (Destination), plus the Feedback loop from Receiver to Sender.",
      ru: "На схеме слайда 10 пять стрелок идут строго так: Sender (Information source) → Encoder (Transmitter) → Channel (снизу к нему идут стрелки от блока Noise) → Decoder (Reception) → Receiver (Destination), а снизу идет петля FEEDBACK.",
    },
  },
  {
    id: "w1_015",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slide 11 (8 Elements of Communication Process)",
      ru: "W1&2 · Слайд 11 (8 элементов процесса коммуникации)",
    },
    q: {
      en: "What is the difference between 'Encoding' (Element 3) and 'Decoding' (Element 6) on Slide 11?",
      ru: "В чем разница между «Encoding» (элемент 3) и «Decoding» (элемент 6) на слайде 11?",
    },
    options: [
      {
        en: "Encoding is turning ideas into words, images, or actions; Decoding is interpreting the message",
        ru: "Encoding — это превращение идей в слова, образы или действия; а Decoding — это интерпретация (расшифровка) сообщения",
      },
      {
        en: "Encoding is interpreting the message; Decoding is turning ideas into words",
        ru: "Encoding — это интерпретация сообщения; а Decoding — превращение идей в слова",
      },
      {
        en: "Encoding is choosing the social media app; Decoding is replying to the sender",
        ru: "Encoding — это выбор приложения соцсети; а Decoding — ответ отправителю",
      },
      {
        en: "Encoding is removing noise; Decoding is adding feedback",
        ru: "Encoding — это устранение шума; а Decoding — добавление обратной связи",
      },
    ],
    correct: 0,
    explanation: {
      en: "On Slide 11: 3. Encoding – turning ideas into words, images, or actions; 6. Decoding – interpreting the message.",
      ru: "Согласно слайду 11: 3. Encoding (кодирование) — перевод идей в слова, изображения или действия; 6. Decoding (декодирование) — интерпретация полученного сообщения.",
    },
  },
  {
    id: "w1_016",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slide 11 (8 Elements Numbered Order)",
      ru: "W1&2 · Слайд 11 (Порядок 8 элементов)",
    },
    q: {
      en: "How are the 8 elements of the Process of Communication numbered from 1 to 8 on Slide 11?",
      ru: "В каком точном порядке пронумерованы 8 элементов процесса коммуникации (от 1 до 8) на слайде 11?",
    },
    options: [
      {
        en: "1. Sender → 2. Message → 3. Encoding → 4. Channel → 5. Receiver → 6. Decoding → 7. Feedback → 8. Noise",
        ru: "1. Sender → 2. Message → 3. Encoding → 4. Channel → 5. Receiver → 6. Decoding → 7. Feedback → 8. Noise",
      },
      {
        en: "1. Sender → 2. Encoding → 3. Message → 4. Channel → 5. Decoding → 6. Receiver → 7. Noise → 8. Feedback",
        ru: "1. Sender → 2. Encoding → 3. Message → 4. Channel → 5. Decoding → 6. Receiver → 7. Noise → 8. Feedback",
      },
      {
        en: "1. Message → 2. Sender → 3. Channel → 4. Encoding → 5. Decoding → 6. Receiver → 7. Feedback → 8. Noise",
        ru: "1. Message → 2. Sender → 3. Channel → 4. Encoding → 5. Decoding → 6. Receiver → 7. Feedback → 8. Noise",
      },
      {
        en: "1. Sender → 2. Channel → 3. Message → 4. Receiver → 5. Encoding → 6. Decoding → 7. Feedback → 8. Noise",
        ru: "1. Sender → 2. Channel → 3. Message → 4. Receiver → 5. Encoding → 6. Decoding → 7. Feedback → 8. Noise",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 11 numbers the blocks strictly as: 1 Sender, 2 Message, 3 Encoding, 4 Channel, 5 Receiver, 6 Decoding, 7 Feedback, 8 Noise.",
      ru: "На слайде 11 цветные блоки пронумерованы именно так: 1 Sender, 2 Message, 3 Encoding, 4 Channel, 5 Receiver, 6 Decoding, 7 Feedback, 8 Noise.",
    },
  },
  {
    id: "w1_017",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slide 13 & 15 (Interpersonal vs Intrapersonal)",
      ru: "W1&2 · Слайд 13 и 15 (Межличностная и внутриличностная)",
    },
    q: {
      en: "Which of the following is a key feature of Intrapersonal Communication (Slide 15) as opposed to Interpersonal Communication (Slide 13)?",
      ru: "Что из перечисленного является ключевой особенностью внутриличностной (Intrapersonal) коммуникации (Слайд 15) в отличие от межличностной (Слайд 13)?",
    },
    options: [
      {
        en: "It involves only one person (you), can be conscious or unconscious, and helps in decision-making, self-reflection, and emotional control",
        ru: "В ней участвует только один человек (вы сами), она может быть осознанной или неосознанной и помогает в принятии решений, саморефлексии и контроле эмоций",
      },
      {
        en: "It requires at least two participants and external feedback via technology",
        ru: "Она требует минимум двух участников и внешней обратной связи через технологии",
      },
      {
        en: "It only takes place through official university emails and reports",
        ru: "Она происходит исключительно через официальные университетские письма и отчеты",
      },
      {
        en: "It cannot happen before a presentation",
        ru: "Она не может происходить перед презентацией",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 15 states that Intrapersonal Communication involves only one person (you), can be conscious (deliberate self-talk) or unconscious (thoughts that just come to mind), and helps in decision-making, self-reflection, and emotional control.",
      ru: "На слайде 15 указано: Intrapersonal Communication включает только одного человека (вас), бывает осознанной (целенаправленный внутренний диалог) или неосознанной и помогает в принятии решений, саморефлексии и эмоциональном контроле.",
    },
  },
  {
    id: "w1_018",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slide 19 (Importance of Verbal Communication)",
      ru: "W1&2 · Слайд 19 (Важность вербальной коммуникации)",
    },
    q: {
      en: "What three reasons does Slide 19 give for the 'Importance of Verbal Communication'?",
      ru: "Какие три причины важности вербальной коммуникации («Importance of Verbal Communication») приведены на слайде 19?",
    },
    options: [
      {
        en: "1) Provides clarity and reduces misunderstanding; 2) Allows for immediate feedback; 3) Essential for academic success (presentations, discussions, assignments)",
        ru: "1) Обеспечивает ясность и снижает недопонимание; 2) Позволяет получить мгновенную обратную связь; 3) Необходима для академического успеха (презентации, дискуссии, задания)",
      },
      {
        en: "1) Replaces body language; 2) Eliminates all noise; 3) Works without a channel",
        ru: "1) Полностью заменяет язык тела; 2) Устраняет любой шум; 3) Работает без канала связи",
      },
      {
        en: "1) Hides facial expressions; 2) Prevents feedback; 3) Used only in informal cafeterias",
        ru: "1) Скрывает мимику; 2) Предотвращает обратную связь; 3) Используется только в столовых",
      },
      {
        en: "1) Uses gestures only; 2) Uses posture only; 3) Uses dress code only",
        ru: "1) Использует только жесты; 2) Использует только осанку; 3) Использует только дресс-код",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 19 lists those exact three bullet points under 'Importance of Verbal Communication'.",
      ru: "На слайде 19 в списке «Importance of Verbal Communication» указаны именно эти три пункта.",
    },
  },
  {
    id: "w1_019",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slide 20 (6 Types of Non-Verbal Communication)",
      ru: "W1&2 · Слайд 20 (6 элементов невербальной коммуникации)",
    },
    q: {
      en: "On Slide 20 (Non-Verbal Communication), what are all 6 non-verbal elements and their exact examples in parentheses?",
      ru: "Какие 6 элементов невербальной коммуникации и примеры в скобках к ним приведены на слайде 20?",
    },
    options: [
      {
        en: "Facial expressions (smiling shows friendliness), Gestures (nodding = agreement, hand raise = question), Body posture (standing tall shows confidence), Eye contact (shows attentiveness), Tone of voice (sarcasm, excitement, seriousness), Appearance & dress code (professionalism)",
        ru: "Facial expressions (улыбка = дружелюбие), Gestures (кивок = согласие, поднятая рука = вопрос), Body posture (прямая осанка = уверенность), Eye contact (внимательность), Tone of voice (сарказм, волнение, серьезность), Appearance & dress code (профессионализм)",
      },
      {
        en: "Emails, Reports, Minutes, Letters, SMS, WhatsApp",
        ru: "Электронные письма, Отчеты, Протоколы, Письма, СМС, WhatsApp",
      },
      {
        en: "Sender, Encoder, Channel, Decoder, Receiver, Noise",
        ru: "Отправитель, Кодировщик, Канал, Декодировщик, Получатель, Шум",
      },
      {
        en: "Font size, Whitespace, Hierarchy, Contrast, Bar chart, Pie chart",
        ru: "Размер шрифта, Пустое пространство, Иерархия, Контраст, Столбчатая и круговая диаграммы",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 20 displays those exact 6 blocks and parenthetical meanings for Non-Verbal Communication.",
      ru: "Слайд 20 включает именно эти 6 блоков невербальной коммуникации с этими пояснениями в скобках.",
    },
  },
  {
    id: "w1_020",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slide 22 (Formal Communication)",
      ru: "W1&2 · Слайд 22 (Формальная коммуникация)",
    },
    q: {
      en: "Which three specific examples of Formal Communication are given at the bottom of Slide 22?",
      ru: "Какие три конкретных примера формальной коммуникации (Formal Communication) приведены в нижней части слайда 22?",
    },
    options: [
      {
        en: "1) A lecturer emailing the Head of Department about exam schedules; 2) A student submitting a leave application to the university; 3) A meeting where minutes are recorded and shared",
        ru: "1) Преподаватель пишет email главе департамента о расписании экзаменов; 2) Студент подает заявление на отпуск/отгул в университет; 3) Встреча, на которой ведется и рассылается протокол (minutes)",
      },
      {
        en: "1) Friends chatting in the cafeteria; 2) A WhatsApp group discussion among classmates; 3) Small talk between a lecturer and students after class",
        ru: "1) Друзья болтают в кафетерии; 2) Обсуждение одногруппников в WhatsApp; 3) Непринужденный разговор преподавателя со студентами после пары",
      },
      {
        en: "1) Saying 'Hey, let's meet up tonight at the library'; 2) Sending voice notes; 3) Posting memes",
        ru: "1) Фраза «Давай встретимся вечером в библиотеке»; 2) Отправка голосовых сообщений; 3) Публикация мемов",
      },
      {
        en: "1) Thinking quietly before a presentation; 2) Daydreaming in class; 3) Talking to yourself in the mirror",
        ru: "1) Тихое размышление перед презентацией; 2) Мечтания на паре; 3) Разговор с собой перед зеркалом",
      },
    ],
    correct: 0,
    explanation: {
      en: "Formal communication is structured, professional, follows official channels, and is often documented (emails, reports, official letters, meeting minutes).",
      ru: "Формальная коммуникация структурирована, официальна и документируется. На слайде 22 приведены именно эти три примера.",
    },
  },
  {
    id: "w1_021",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slide 23 (Informal Communication)",
      ru: "W1&2 · Слайд 23 (Неформальная коммуникация)",
    },
    q: {
      en: "On Slide 23, two students are working on a group assignment and during lunch one says: “Hey, let's meet up tonight at the library to finish our slides.” What type of communication is this, and what are its other three examples on that slide?",
      ru: "На слайде 23 два студента во время обеда говорят: «Hey, let's meet up tonight at the library to finish our slides». Какой это тип коммуникации и какие еще три примера указаны на этом слайде?",
    },
    options: [
      {
        en: "Informal Communication — Examples: 1) Friends chatting in the cafeteria; 2) A WhatsApp group discussion among classmates; 3) Small talk between a lecturer and students after class",
        ru: "Неформальная коммуникация (Informal) — Примеры: 1) Друзья общаются в кафетерии; 2) Обсуждение в группе WhatsApp среди одногруппников; 3) Small talk между преподавателем и студентами после занятия",
      },
      {
        en: "Formal Communication — Examples: Official letters, leave applications, and department emails",
        ru: "Формальная коммуникация — Примеры: официальные письма, заявления и письма деканату",
      },
      {
        en: "Intrapersonal Communication — Examples: Self-talk, reflection, and emotional control",
        ru: "Внутриличностная коммуникация — Примеры: внутренний диалог, рефлексия и контроль эмоций",
      },
      {
        en: "Non-Verbal Communication — Examples: Posture, eye contact, and dress code",
        ru: "Невербальная коммуникация — Примеры: осанка, зрительный контакт и дресс-код",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 23 illustrates Informal Communication (casual, relaxed, personal, helps build relationships and strengthen social bonds) with those three examples and the library scenario.",
      ru: "Слайд 23 иллюстрирует неформальную коммуникацию (непринужденную, личную, укрепляющую социальные связи) этими тремя примерами и сценарием встречи в библиотеке.",
    },
  },
  {
    id: "w1_022",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slide 24 (Effective Communication Chain)",
      ru: "W1&2 · Слайд 24 (Цепочка эффективной коммуникации)",
    },
    q: {
      en: "What is the 4-step circular chain shown at the bottom of Slide 24 (Effective Communication)?",
      ru: "Какая цепочка из 4 кругов со стрелками изображена внизу слайда 24 (Effective Communication)?",
    },
    options: [
      {
        en: "Sender → Message → Receiver → Shared understanding",
        ru: "Sender → Message → Receiver → Shared understanding (Общее понимание)",
      },
      {
        en: "Idea → Plan → Action → Profit",
        ru: "Idea → Plan → Action → Profit",
      },
      {
        en: "Interrupt → Recover → Impact → Resume",
        ru: "Interrupt → Recover → Impact → Resume",
      },
      {
        en: "Ask → Edit → Own → Check",
        ru: "Ask → Edit → Own → Check",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 24 shows the 4 circles: Sender → Message → Receiver → Shared understanding (with two people high-fiving).",
      ru: "Внизу слайда 24 изображена цепочка из четырех кругов: Sender → Message → Receiver → Shared understanding.",
    },
  },
  {
    id: "w1_023",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slide 25 (Clarity in Daily Life)",
      ru: "W1&2 · Слайд 25 (Ясность в повседневной жизни)",
    },
    q: {
      en: "What are the 3 areas of 'Clarity in Daily Life' on Slide 25, and what diagram is shown on the presentation screen in '3. Professional Growth'?",
      ru: "Какие 3 сферы выделены на слайде 25 («Clarity in Daily Life») и какая схема написана на экране в пункте «3. Professional Growth»?",
    },
    options: [
      {
        en: "1. Academic Success, 2. Better Relationships, 3. Professional Growth — with the screen showing 'IDEA → PLAN → ACTION'",
        ru: "1. Academic Success, 2. Better Relationships, 3. Professional Growth — со схемой «IDEA → PLAN → ACTION» на экране",
      },
      {
        en: "1. University, 2. Internship, 3. Workplace — with the screen showing 'THINK → RESPECT → CHECK'",
        ru: "1. University, 2. Internship, 3. Workplace — со схемой «THINK → RESPECT → CHECK»",
      },
      {
        en: "1. Technical, 2. Language, 3. Cognitive — with the screen showing 'NORTH STAR → ALIGNMENT'",
        ru: "1. Technical, 2. Language, 3. Cognitive — со схемой «NORTH STAR → ALIGNMENT»",
      },
      {
        en: "1. Forming, 2. Storming, 3. Performing — with the screen showing 'S + B = I'",
        ru: "1. Forming, 2. Storming, 3. Performing — со схемой «S + B = I»",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 25 covers 1. Academic Success, 2. Better Relationships, and 3. Professional Growth (where the meeting screen shows IDEA → PLAN → ACTION).",
      ru: "Слайд 25 включает: 1. Academic Success, 2. Better Relationships и 3. Professional Growth (на фото деловой встречи на экране изображена схема IDEA → PLAN → ACTION).",
    },
  },
  {
    id: "w1_024",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slide 26 (Effective vs Ineffective Communication Table)",
      ru: "W1&2 · Слайд 26 (Таблица эффективной и неэффективной коммуникации)",
    },
    q: {
      en: "In the table on Slide 26 comparing Effective vs. Ineffective Communication, what are the 5 aspects evaluated?",
      ru: "По каким 5 аспектам (Aspect) сравниваются эффективная и неэффективная коммуникация в таблице на слайде 26?",
    },
    options: [
      {
        en: "Message Clarity, Understanding, Feedback, Tone & Delivery, Outcome",
        ru: "Message Clarity (Ясность сообщения), Understanding (Понимание), Feedback (Обратная связь), Tone & Delivery (Тон и подача), Outcome (Результат)",
      },
      {
        en: "Sender, Encoder, Channel, Decoder, Receiver",
        ru: "Sender, Encoder, Channel, Decoder, Receiver",
      },
      {
        en: "Grammar, Spelling, Font Size, Color Contrast, Animation",
        ru: "Грамматика, Орфография, Размер шрифта, Контраст цветов, Анимация",
      },
      {
        en: "Respect, Honesty, Responsibility, Privacy, AI Usage",
        ru: "Уважение, Честность, Ответственность, Приватность, Использование ИИ",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 26 compares Effective vs Ineffective Communication across: 1) Message Clarity, 2) Understanding, 3) Feedback, 4) Tone & Delivery, and 5) Outcome (Desired result is achieved vs Leads to mistakes, delays, or conflict).",
      ru: "В таблице на слайде 26 указаны 5 строк: Message Clarity, Understanding, Feedback, Tone & Delivery и Outcome.",
    },
  },
  {
    id: "w1_025",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slide 27 (TikTok Activity)",
      ru: "W1&2 · Слайд 27 (Задание с TikTok)",
    },
    q: {
      en: "In the class activity on Slide 27 ('Explain TikTok to someone who has never used the Internet'), which 4 words are you strictly forbidden from using?",
      ru: "Какие 4 слова строго запрещено использовать в задании на слайде 27 («Объясните, что такое TikTok человеку, который никогда не пользовался интернетом»)?",
    },
    options: [
      {
        en: "1. Tik Tok, 2. Social Media, 3. App, 4. Video",
        ru: "1. Tik Tok, 2. Social Media, 3. App, 4. Video",
      },
      {
        en: "1. Internet, 2. Phone, 3. Dance, 4. Music",
        ru: "1. Internet, 2. Phone, 3. Dance, 4. Music",
      },
      {
        en: "1. Reels, 2. Shorts, 3. Influencer, 4. Viral",
        ru: "1. Reels, 2. Shorts, 3. Influencer, 4. Viral",
      },
      {
        en: "1. Online, 2. Screen, 3. Camera, 4. Share",
        ru: "1. Online, 2. Screen, 3. Camera, 4. Share",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 27 states: 'You cannot use the words below: 1. Tik Tok, 2. Social Media, 3. App, 4. Video.'",
      ru: "На слайде 27 перечислены ровно эти 4 запрещенных слова: 1. Tik Tok, 2. Social Media, 3. App, 4. Video.",
    },
  },
  {
    id: "w1_026",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slide 28 (SELL THE USELESS!)",
      ru: "W1&2 · Слайд 28 (Продай бесполезное!)",
    },
    q: {
      en: "Which 6 items are listed in the 'SELL THE USELESS!' persuasive communication activity on Slide 28?",
      ru: "Какие 6 предметов перечислены в упражнении «SELL THE USELESS!» на слайде 28?",
    },
    options: [
      {
        en: "1. Invisible Umbrella, 2. Wi-Fi Shoes, 3. Waterproof Water, 4. Alarm Clock That Doesn't Make Sound, 5. A Backpack With No Space, 6. Invisible Sunglasses",
        ru: "1. Невидимый зонт, 2. Обувь с Wi-Fi, 3. Водонепроницаемая вода, 4. Беззвучный будильник, 5. Рюкзак без места внутри, 6. Невидимые солнцезащитные очки",
      },
      {
        en: "1. Broken Laptop, 2. Empty Pen, 3. Paper Teapot, 4. Chocolate Hammer, 5. Solar Flashlight, 6. Screenless Phone",
        ru: "1. Сломанный ноутбук, 2. Пустая ручка, 3. Бумажный чайник, 4. Шоколадный молоток, 5. Фонарик на солнечной батарее, 6. Телефон без экрана",
      },
      {
        en: "1. Coffee, 2. Masala Chai, 3. Noodles, 4. Pizza, 5. DJ Mixer, 6. Movie Ticket",
        ru: "1. Кофе, 2. Масала-чай, 3. Лапша, 4. Пицца, 5. DJ-пульт, 6. Билет в кино",
      },
      {
        en: "1. Mute Microphone, 2. Offline Router, 3. Blank Slide, 4. Locked Drive, 5. Spam Email, 6. Broken Webcam",
        ru: "1. Выключенный микрофон, 2. Роутер без сети, 3. Пустой слайд, 4. Закрытый диск, 5. Спам-письмо, 6. Сломанная вебкамера",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 28 lists those exact 6 paradoxical products for students to pitch in class.",
      ru: "На слайде 28 в две колонки перечислены именно эти 6 абсурдных товаров для тренировки навыка убеждения.",
    },
  },
  {
    id: "w1_027",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slides 2–6 (Opening Visual Pairs & SMS Screenshot)",
      ru: "W1&2 · Слайды 2–6 (Визуальные пары и скриншот SMS)",
    },
    q: {
      en: "On Slide 3 of Lecture 1 (comparing a phone call on hold vs. an SMS conversation), what happens in the SMS thread on the right phone screen?",
      ru: "Что происходит в SMS-переписке на правом экране телефона на слайде 3 первой лекции (где сравниваются телефонный звонок на удержании и текстовые сообщения)?",
    },
    options: [
      {
        en: "One person apologizes for double-booking themselves and asks to reschedule for Wednesday next week at the same time",
        ru: "Собеседник извиняется за двойное бронирование (double booked) и просит перенести встречу на среду следующей недели в то же время",
      },
      {
        en: "A student asks the lecturer to send all missed class notes immediately",
        ru: "Студент просит преподавателя срочно скинуть все пропущенные конспекты",
      },
      {
        en: "Haya and Arjun plan to meet at the university library at 2 PM",
        ru: "Хайя и Арджун договариваются встретиться в библиотеке в 14:00",
      },
      {
        en: "Alex reports video issues and switches the meeting to audio",
        ru: "Алекс сообщает о проблемах с видео и переключает встречу на аудио",
      },
    ],
    correct: 0,
    explanation: {
      en: "In the Slide 3 SMS screenshot, the grey message says: 'I apologize I had double booked myself can we reschedule for the next week same time?' followed by 'Wednesday next week same time then?' → 'Yes please'.",
      ru: "На скриншоте SMS со слайда 3 видно сообщение: «I apologize I had double booked myself can we reschedule for the next week same time?» и ответ: «Wednesday next week same time then?» → «Yes please».",
    },
  },
  {
    id: "w1_028",
    topic: "W1_2",
    sourceType: "slides",
    sourceRef: {
      en: "W1&2 · Slides 16 & 17 (Let's Reflect & Pair Share)",
      ru: "W1&2 · Слайды 16 и 17 (Рефлексия и работа в парах)",
    },
    q: {
      en: "In the 'LET'S REFLECT' (Slide 16) and 'PAIR SHARE' (Slide 17) activities about having a presentation tomorrow, how much time is on the timer for each activity, and what encouraging note is taped on Slide 17?",
      ru: "Сколько времени отведено на таймере в упражнениях «LET'S REFLECT» (Слайд 16) и «PAIR SHARE» (Слайд 17) про завтрашнюю презентацию, и какая поддерживающая фраза написана на открытке со скотчем на слайде 17?",
    },
    options: [
      {
        en: "2 minutes each — and the taped card says 'You've got this!'",
        ru: "По 2 минуты на каждое — а на открытке написано «You've got this!»",
      },
      {
        en: "50 minutes each — and the card says 'One outcome at a time'",
        ru: "По 50 минут на каждое — а на открытке написано «One outcome at a time»",
      },
      {
        en: "10 seconds each — and the card says 'Pause. THINK. Then send.'",
        ru: "По 10 секунд на каждое — а на открытке написано «Pause. THINK. Then send.»",
      },
      {
        en: "60 seconds each — and the card says 'Speak. Engage. Connect.'",
        ru: "По 60 секунд на каждое — а на открытке написано «Speak. Engage. Connect.»",
      },
    ],
    correct: 0,
    explanation: {
      en: "Both Slide 16 (intrapersonal reflection) and Slide 17 (interpersonal pair share) have a '2 minutes' timer, and Slide 17 features a taped note reading 'You've got this!'.",
      ru: "И на слайде 16, и на слайде 17 стоит таймер «2 minutes», а на слайде 17 прикреплена открытка с надписью «You've got this!».",
    },
  },

  // ==========================================================================
  // TOPIC 2: W3 — DIGITAL ETIQUETTE & WORKPLACE PROFESSIONALISM (LECTURE 2)
  // ==========================================================================
  {
    id: "w3_001",
    topic: "W3",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W3 · Knowledge Check Q1 / Section 1",
      ru: "Moodle W3 · Проверка знаний В1 / Раздел 1",
    },
    q: {
      en: "Digital etiquette refers to?",
      ru: "К чему относится понятие «цифровой этикет» (Digital etiquette)?",
    },
    options: [
      { en: "Internet speed", ru: "Скорость интернета" },
      {
        en: "Appropriate online behaviour",
        ru: "Уместное и уважительное поведение в интернете",
      },
      { en: "Coding skills", ru: "Навыки программирования" },
      { en: "Hardware repair", ru: "Ремонт компьютерного оборудования" },
    ],
    correct: 1,
    explanation: {
      en: "Digital etiquette (netiquette) refers to appropriate and respectful behaviour in online spaces.",
      ru: "Цифровой этикет — это нормы уместного, вежливого и уважительного поведения в цифровой среде.",
    },
  },
  {
    id: "w3_002",
    topic: "W3",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W3 · Knowledge Check Q2 / Slide 7",
      ru: "Moodle W3 · Проверка знаний В2 / Слайд 7",
    },
    q: {
      en: "Which of the following is the best email practice?",
      ru: "Что из перечисленного является лучшей практикой при написании электронного письма (email)?",
    },
    options: [
      { en: "No subject", ru: "Отсутствие темы письма" },
      {
        en: "Clear subject line",
        ru: "Четкая и конкретная тема письма (Clear subject line)",
      },
      { en: "ALL CAPS", ru: "Текст, написанный ЗАГЛАВНЫМИ БУКВАМИ" },
      { en: "Blank greeting", ru: "Отсутствие приветствия" },
    ],
    correct: 1,
    explanation: {
      en: "A professional email always includes a clear, specific subject line, a polite greeting, a clear purpose, and a courteous closing.",
      ru: "Профессиональное письмо обязательно должно содержать четкую и понятную тему (Subject Line), вежливое приветствие, суть обращения и подпись.",
    },
  },
  {
    id: "w3_003",
    topic: "W3",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W3 · Knowledge Check Q3 / Slide 10",
      ru: "Moodle W3 · Проверка знаний В3 / Слайд 10",
    },
    q: {
      en: "What does 'digital footprint' mean?",
      ru: "Что означает понятие «цифровой след» (digital footprint)?",
    },
    options: [
      {
        en: "Online record (all information about you available online)",
        ru: "Запись о вашей активности в сети (вся информация о вас, доступная онлайн)",
      },
      { en: "WiFi signal", ru: "Уровень сигнала Wi-Fi" },
      { en: "Password", ru: "Пароль от аккаунта" },
      { en: "Printer log", ru: "Журнал печати принтера" },
    ],
    correct: 0,
    explanation: {
      en: "Your digital footprint is your permanent online record—all information, posts, comments, and interactions about you available online.",
      ru: "Цифровой след — это вся совокупность информации и записей о ваших действиях, постах и сообщениях, которая остается в интернете.",
    },
  },
  {
    id: "w3_004",
    topic: "W3",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W3 · Knowledge Check Q4 / Slide 12 & 17",
      ru: "Moodle W3 · Проверка знаний В4 / Слайд 12 и 17",
    },
    q: {
      en: "How should confidential information be handled?",
      ru: "Как следует обращаться с конфиденциальной информацией?",
    },
    options: [
      { en: "Be posted publicly", ru: "Публиковать в открытом доступе" },
      { en: "Be protected", ru: "Защищать и хранить в тайне (Be protected)" },
      { en: "Be shared widely", ru: "Широко распространять в чатах" },
      { en: "Be ignored", ru: "Игнорировать правила безопасности" },
    ],
    correct: 1,
    explanation: {
      en: "Confidential company and private customer/personal information must always be protected and never posted or uploaded to public tools.",
      ru: "Конфиденциальные данные компании и личная информация клиентов должны быть надежно защищены.",
    },
  },
  {
    id: "w3_005",
    topic: "W3",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W3 · Knowledge Check Q5 / Slide 14 & 15",
      ru: "Moodle W3 · Проверка знаний В5 / Слайд 14 и 15",
    },
    q: {
      en: "AI-generated content should be:",
      ru: "Контент, сгенерированный искусственным интеллектом (ИИ), должен:",
    },
    options: [
      { en: "Copied blindly", ru: "Копироваться вслепую без чтения" },
      {
        en: "Verified before use",
        ru: "Проверяться перед использованием (Verified before use)",
      },
      { en: "Automatically trusted", ru: "Вызывать автоматическое доверие" },
      {
        en: "Shared without review",
        ru: "Отправляться без какой-либо проверки",
      },
    ],
    correct: 1,
    explanation: {
      en: "AI can generate inaccurate or misleading information (hallucinations), so outputs must always be verified and edited in your own voice before use.",
      ru: "ИИ может выдавать неточные или вымышленные факты, поэтому любой результат необходимо тщательно проверять и перерабатывать перед использованием.",
    },
  },
  {
    id: "w3_006",
    topic: "W3",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W3 · Scenario Activity / Slide 12–14",
      ru: "Moodle W3 · Сценарное задание / Слайд 12–14",
    },
    q: {
      en: "Moodle W3 Scenario: A colleague wants to paste private customer data into a public AI tool to summarize it quickly. What should you do?",
      ru: "Сценарий Moodle W3: Коллега хочет вставить личные данные клиентов в публичный ИИ-сервис, чтобы быстро сделать сводку. Как вам следует поступить?",
    },
    options: [
      {
        en: "Advise them to stop immediately because uploading private customer or confidential data to public AI tools violates privacy, security, and digital ethics",
        ru: "Немедленно остановить его и объяснить, что загрузка личных данных клиентов в публичный ИИ нарушает конфиденциальность, безопасность и цифровую этику",
      },
      {
        en: "Encourage them to paste the data because AI is encrypted and saves time",
        ru: "Поддержать идею, так как это сэкономит время команды",
      },
      {
        en: "Post the customer data on a discussion forum instead",
        ru: "Вместо этого опубликовать данные клиентов на форуме",
      },
      {
        en: "Tell them to remove only the subject line and upload the rest",
        ru: "Предложить удалить только заголовок, а все остальные данные загрузить",
      },
    ],
    correct: 0,
    explanation: {
      en: "Sharing private/confidential data with public AI tools is a major risk to avoid (Slide 13 & 14). Always protect privacy and sensitive data.",
      ru: "Передача конфиденциальных или клиентских данных публичным ИИ-инструментам — грубое нарушение правил приватности и цифровой этики (Слайды 13 и 14).",
    },
  },
  {
    id: "w3_007",
    topic: "W3",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W3 · Concept Map",
      ru: "Moodle W3 · Концепт-карта урока",
    },
    q: {
      en: "What is the exact 5-step sequence in the Moodle W3 Concept Map?",
      ru: "Какова точная цепочка из 5 элементов в концепт-карте урока Moodle W3?",
    },
    options: [
      {
        en: "Digital Etiquette → Communication → Trust → Professional Reputation → Career Success",
        ru: "Digital Etiquette → Communication → Trust → Professional Reputation → Career Success",
      },
      {
        en: "Social Media → Likes → Followers → Corporate Brand → Promotion",
        ru: "Social Media → Likes → Followers → Corporate Brand → Promotion",
      },
      {
        en: "Email → Chat → Forum → Video Call → AI",
        ru: "Email → Chat → Forum → Video Call → AI",
      },
      {
        en: "Sender → Message → Channel → Receiver → Feedback",
        ru: "Sender → Message → Channel → Receiver → Feedback",
      },
    ],
    correct: 0,
    explanation: {
      en: "The Moodle W3 Concept Map shows: Digital Etiquette → Communication → Trust → Professional Reputation → Career Success.",
      ru: "Концепт-карта в Moodle W3 выглядит именно так: Digital Etiquette → Communication → Trust → Professional Reputation → Career Success.",
    },
  },
  {
    id: "w3_008",
    topic: "W3",
    sourceType: "slides",
    sourceRef: {
      en: "W3 · Slide 3 (Warm-Up: Would You Send This?)",
      ru: "W3 · Слайд 3 (Разминка: Вы бы отправили это?)",
    },
    q: {
      en: "On Slide 3, a student considers texting their lecturer: “Hi miss, I can't come class tmr. Send me everything I missed pls.” Which three things does the slide prompt you to 'Think about', and should this message be sent as-is?",
      ru: "На слайде 3 студентка хочет отправить преподавателю сообщение: «Hi miss, I can't come class tmr. Send me everything I missed pls.». О каких трех вещах просит задуматься слайд («Think about»), и стоит ли отправлять такое сообщение?",
    },
    options: [
      {
        en: "Think about: tone, clarity, and respect — NO, it uses text slang ('tmr', 'pls'), lacks a proper greeting/closing, and makes a demanding request",
        ru: "Подумать о: тоне, ясности и уважении (tone, clarity, and respect) — НЕТ, сообщение содержит сленг и звучит как грубое требование",
      },
      {
        en: "Think about: speed, emojis, and Wi-Fi — YES, because it is short and direct",
        ru: "Подумать о: скорости, эмодзи и Wi-Fi — ДА, так как оно короткое и прямое",
      },
      {
        en: "Think about: font, color, and hierarchy — MAYBE, if sent in ALL CAPS",
        ru: "Подумать о: шрифте, цвете и иерархии — ВОЗМОЖНО, если написать КАПСОМ",
      },
      {
        en: "Think about: AI, privacy, and copyright — YES, lecturers prefer SMS slang",
        ru: "Подумать о: ИИ, приватности и авторском праве — ДА, преподаватели любят сленг",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 3 asks students to evaluate the message based on 'tone, clarity, and respect'. The message is demanding, informal, and disrespectful.",
      ru: "На слайде 3 указана подсказка с лампочкой: «Think about: tone, clarity, and respect». Такое сообщение отправлять нельзя.",
    },
  },
  {
    id: "w3_009",
    topic: "W3",
    sourceType: "slides",
    sourceRef: {
      en: "W3 · Slide 4 (Why Does Digital Etiquette Matter?)",
      ru: "W3 · Слайд 4 (Почему важен цифровой этикет?)",
    },
    q: {
      en: "What are the three key areas impacted by digital etiquette on Slide 4 ('Every digital message leaves an impression')?",
      ru: "Какие три ключевые сферы, на которые влияет цифровой этикет, выделены на карточки слайда 4 («Every digital message leaves an impression»)?",
    },
    options: [
      {
        en: "1) Personal & academic reputation; 2) Employability & relationships; 3) Organisational reputation",
        ru: "1) Личная и академическая репутация; 2) Трудоустройство и отношения; 3) Репутация организации",
      },
      {
        en: "1) Hardware performance; 2) Network latency; 3) Cloud storage",
        ru: "1) Производительность железа; 2) Задержка сети; 3) Облачное хранилище",
      },
      {
        en: "1) Intrapersonal thoughts; 2) Facial expressions; 3) Physical posture",
        ru: "1) Внутриличностные мысли; 2) Мимика; 3) Физическая осанка",
      },
      {
        en: "1) Bar charts; 2) Pie charts; 3) Line graphs",
        ru: "1) Столбчатые диаграммы; 2) Круговые диаграммы; 3) Линейные графики",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 4 highlights: 1. Personal & academic reputation, 2. Employability & relationships, and 3. Organisational reputation.",
      ru: "На слайде 4 представлены три карточки: 1. Personal & academic reputation, 2. Employability & relationships, 3. Organisational reputation.",
    },
  },
  {
    id: "w3_010",
    topic: "W3",
    sourceType: "slides",
    sourceRef: {
      en: "W3 · Slide 5 (The 5 Rules of Digital Etiquette — THINK)",
      ru: "W3 · Слайд 5 (5 правил цифрового этикета — THINK)",
    },
    q: {
      en: "What does each letter of the 10-second 'THINK' checklist stand for on Slide 5 ('Pause. THINK. Then send.')?",
      ru: "Как расшифровывается каждая буква 10-секундного чек-листа «THINK» перед нажатием кнопки Send на слайде 5?",
    },
    options: [
      {
        en: "T — Tone, H — Helpful, I — Information, N — Name & identity, K — Keep it professional",
        ru: "T — Tone (Тон), H — Helpful (Польза/необходимость), I — Information (Достаточно ли контекста и деталей), N — Name & identity (Готов ли я подписаться своим именем), K — Keep it professional (Сказал бы я это на работе)",
      },
      {
        en: "T — True, H — Honest, I — Inspiring, N — Necessary, K — Kind",
        ru: "T — True, H — Honest, I — Inspiring, N — Necessary, K — Kind",
      },
      {
        en: "T — Time, H — Hierarchy, I — Internet, N — Noise, K — Knowledge",
        ru: "T — Time, H — Hierarchy, I — Internet, N — Noise, K — Knowledge",
      },
      {
        en: "T — Text, H — Headline, I — Image, N — Notes, K — Keyboard",
        ru: "T — Text, H — Headline, I — Image, N — Notes, K — Keyboard",
      },
    ],
    correct: 0,
    explanation: {
      en: "On Slide 5, the 10-second checklist is specifically: T — Tone, H — Helpful, I — Information, N — Name & identity, K — Keep it professional.",
      ru: "Внимание: на слайде 5 курса DGCC акроним THINK расшифровывается именно так: Tone, Helpful, Information, Name & identity, Keep it professional!",
    },
  },
  {
    id: "w3_011",
    topic: "W3",
    sourceType: "slides",
    sourceRef: {
      en: "W3 · Slide 6 (Messaging Etiquette — Do & Don't)",
      ru: "W3 · Слайд 6 (Этикет в мессенджерах — Do & Don't)",
    },
    q: {
      en: "According to Slide 6 (Messaging Etiquette), which of the following is explicitly listed under the 'Don't' column for group chats and professional messaging platforms?",
      ru: "Что из перечисленного прямо указано в колонке «Don't» (Чего делать нельзя) на слайде 6 (Messaging Etiquette)?",
    },
    options: [
      {
        en: "Spam or send voice notes, use ALL CAPS, repeatedly send 'Hello??', share inappropriate content, or send unclear one-word replies",
        ru: "Спамить или отправлять голосовые сообщения (voice notes), писать КАПСОМ, многократно писать «Hello??», делиться неуместным контентом или присылать непонятные ответы из одного слова",
      },
      {
        en: "Start with a greeting, check the correct group, and read previous messages",
        ru: "Начинать с приветствия, проверять, в ту ли группу пишешь, и читать предыдущие сообщения",
      },
      {
        en: "Be clear and concise and reply in a reasonable time",
        ru: "Писать ясно и кратко и отвечать в разумные сроки",
      },
      {
        en: "Coordinate library study sessions at 2 PM with classmates like Haya and Arjun",
        ru: "Договариваться с одногруппниками (как Хайя и Арджун) о встрече в библиотеке в 14:00",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 6 lists 5 'Don't' rules: 1) Spam or send voice notes, 2) Use ALL CAPS, 3) Repeatedly send 'Hello??', 4) Share inappropriate content, 5) Send unclear one-word replies.",
      ru: "На слайде 6 в списке «Don't» перечислены эти 5 запретов (включая спам и голосовые сообщения, КАПС, навязчивые «Hello??» и односложные неясные ответы).",
    },
  },
  {
    id: "w3_012",
    topic: "W3",
    sourceType: "slides",
    sourceRef: {
      en: "W3 · Slide 7 (The 4 Key Parts of a Professional Email)",
      ru: "W3 · Слайд 7 (4 ключевые части профессионального Email)",
    },
    q: {
      en: "What are the 4 Key Parts of a Professional Email shown on Slide 7 (in Amir's email to dr.lee@university.edu)?",
      ru: "Каковы 4 ключевые части профессионального электронного письма на слайде 7 (на примере письма Амира к dr.lee@university.edu)?",
    },
    options: [
      {
        en: "1. Subject Line (Clear & specific), 2. Greeting ('Dear Dr. Lee,'), 3. Purpose (State reason clearly and politely), 4. Closing ('Thank you for your time. Kind regards, Amir')",
        ru: "1. Subject Line (Тема письма), 2. Greeting (Приветствие), 3. Purpose (Цель обращения), 4. Closing (Вежливое завершение и подпись)",
      },
      {
        en: "1. Emoji Header, 2. Voice Note, 3. Postscript, 4. Hashtags",
        ru: "1. Заголовок с эмодзи, 2. Голосовое сообщение, 3. Постскриптум, 4. Хэштеги",
      },
      {
        en: "1. IP Address, 2. Browser Log, 3. Encryption Key, 4. Hyperlink",
        ru: "1. IP-адрес, 2. Лог браузера, 3. Ключ шифрования, 4. Гиперссылка",
      },
      {
        en: "1. Hook, 2. Poll, 3. Q&A, 4. Exit Ticket",
        ru: "1. Хук, 2. Опрос, 3. Вопросы и ответы, 4. Выходной билет",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 7 identifies the 4 key parts: 1. Subject Line, 2. Greeting, 3. Purpose, and 4. Closing.",
      ru: "На слайде 7 выделены 4 главные части письма: 1. Subject Line, 2. Greeting, 3. Purpose, 4. Closing.",
    },
  },
  {
    id: "w3_013",
    topic: "W3",
    sourceType: "slides",
    sourceRef: {
      en: "W3 · Slide 8 (Email: Before & After)",
      ru: "W3 · Слайд 8 (Письмо: До и После)",
    },
    q: {
      en: "On Slide 8 ('Email: Before & After'), how is the unprofessional subject line “help” improved in the polished, professional version sent by Amir to Dr. Lee?",
      ru: "Как на слайде 8 («Email: Before & After») непрофессиональная тема письма «help» исправлена в профессиональном варианте письма Амира к доктору Ли?",
    },
    options: [
      {
        en: "Subject: “Missed Class on 9 September” — with a polite request asking what topics or activities to review",
        ru: "Subject: «Missed Class on 9 September» — с вежливым вопросом о том, какие темы или задания следует изучить самостоятельно",
      },
      {
        en: "Subject: “URGENT HELP NEEDED ASAP!!!” — demanding the lecturer's slides immediately",
        ru: "Subject: «URGENT HELP NEEDED ASAP!!!» — с требованием немедленно прислать слайды",
      },
      {
        en: "Subject: “Hi Dr. Lee” — with only one sentence saying 'I won't be there'",
        ru: "Subject: «Hi Dr. Lee» — с одной фразой «Меня не будет»",
      },
      {
        en: "No subject line is used in the After version",
        ru: "В исправленной версии тема письма вообще убрана",
      },
    ],
    correct: 0,
    explanation: {
      en: "In the 'After (Professional)' column on Slide 8, the subject is 'Missed Class on 9 September' and Amir politely asks what topics or activities he should review.",
      ru: "В правой колонке слайда 8 тема заменена на конкретную: «Missed Class on 9 September», а само письмо написано уважительно и конструктивно.",
    },
  },
  {
    id: "w3_014",
    topic: "W3",
    sourceType: "slides",
    sourceRef: {
      en: "W3 · Slide 9 (Discussion Boards & Online Forums)",
      ru: "W3 · Слайд 9 (Дискуссионные доски и онлайн-форумы)",
    },
    q: {
      en: "When participating in academic Discussion Boards & Online Forums (Slide 9), why should you avoid replying only with “I agree.” and what should you write instead?",
      ru: "Почему при участии в академических онлайн-форумах (Слайд 9) следует избегать ответов из одной фразы «I agree.» и как лучше ответить вместо этого?",
    },
    options: [
      {
        en: "Single-word/short replies add no value; instead provide reasoned answers with examples, such as: 'I agree because... Another example is...'",
        ru: "Односложные ответы не несут аргументации; вместо этого нужно давать обоснованные ответы с примерами: «I agree because... Another example is...»",
      },
      {
        en: "Because 'I agree.' is too formal; you should use emojis only",
        ru: "Потому что «I agree.» звучит слишком официально; лучше отправить только эмодзи",
      },
      {
        en: "Because you must always disagree and attack other opinions on forums",
        ru: "Потому что на форумах нужно всегда спорить с чужим мнением",
      },
      {
        en: "Because forum replies must be at least 5,000 words long",
        ru: "Потому что ответ на форуме обязан содержать минимум 5000 слов",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 9 instructs students to avoid single-word replies like 'I agree.' and instead write reasoned responses with examples: 'I agree because... Another example is...'.",
      ru: "Слайд 9 учит давать аргументированные ответы с примерами и предлагает шаблон: «I agree because... Another example is...».",
    },
  },
  {
    id: "w3_015",
    topic: "W3",
    sourceType: "slides",
    sourceRef: {
      en: "W3 · Slide 10 & 11 (Social Media, Personal Brand vs Corporate Brand)",
      ru: "W3 · Слайд 10 и 11 (Соцсети, личный и корпоративный бренд)",
    },
    q: {
      en: "On Slide 11 ('Personal Brand vs Corporate Brand'), what example post is shown under 'Corporate Brand at Risk' that demonstrates how one employee post can damage company trust?",
      ru: "Какой пример поста сотрудника приведен на слайде 11 в блоке «Corporate Brand at Risk», показывающий, как один пост может подорвать доверие к компании?",
    },
    options: [
      {
        en: "“Our customers are so annoying”",
        ru: "«Our customers are so annoying» («Наши клиенты так раздражают»)",
      },
      {
        en: "“Hey, let's meet up tonight at the library to finish our slides.”",
        ru: "«Hey, let's meet up tonight at the library to finish our slides.»",
      },
      {
        en: "“Let's hit it out of the park.”",
        ru: "«Let's hit it out of the park.»",
      },
      {
        en: "“Can you settle this by today?”",
        ru: "«Can you settle this by today?»",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 11 shows the post 'Our customers are so annoying' with a red cross, falling graph, and 1-star rating, illustrating that employees represent their employer online.",
      ru: "На слайде 11 под заголовком «Corporate Brand at Risk» приведен пост «Our customers are so annoying», который обрушивает рейтинг и доверие к компании.",
    },
  },
  {
    id: "w3_016",
    topic: "W3",
    sourceType: "slides",
    sourceRef: {
      en: "W3 · Slide 12 (What Should You Avoid Posting?)",
      ru: "W3 · Слайд 12 (Чего следует избегать при публикации постов?)",
    },
    q: {
      en: "Which items does Slide 12 list under 'Avoid Posting' and 'Also Avoid' on social media?",
      ru: "Какие пункты перечислены на слайде 12 в блоках «Avoid Posting» и «Also Avoid»?",
    },
    options: [
      {
        en: "Confidential company info, Private customer info, Offensive content, Workplace arguments — plus False information, Content that damages reputations, and Photos/videos of others without permission",
        ru: "Конфиденциальная информация компании, Личные данные клиентов, Оскорбительный контент, Рабочие споры — а также Ложная информация, Ущерб репутации и Фото/видео других людей без их разрешения",
      },
      {
        en: "Academic achievements, graduation photos, and internship announcements",
        ru: "Академические достижения, фото с выпускного и новости о стажировке",
      },
      {
        en: "Polite greetings, clear subject lines, and constructive forum replies",
        ru: "Вежливые приветствия, четкие темы писем и конструктивные ответы на форумах",
      },
      {
        en: "Meeting agendas, time zones, and written recaps",
        ru: "Повестки встреч, часовые пояса и письменные итоги",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 12 lists all seven of these items and concludes: 'Could this post cause harm? If yes → STOP and THINK before you post.'",
      ru: "На слайде 12 перечислены именно эти 7 категорий контента, которые нельзя публиковать, и правило: «Может ли этот пост причинить вред? Если да → ОСТАНОВИСЬ и ПОДУМАЙ».",
    },
  },
  {
    id: "w3_017",
    topic: "W3",
    sourceType: "slides",
    sourceRef: {
      en: "W3 · Slide 13 (Digital Ethics — Four Core Principles)",
      ru: "W3 · Слайд 13 (Цифровая этика — 4 базовых принципа)",
    },
    q: {
      en: "What are the Four Core Principles of Digital Ethics shown on Slide 13?",
      ru: "Каковы четыре базовых принципа цифровой этики (Four Core Principles of Digital Ethics), представленные на слайде 13?",
    },
    options: [
      {
        en: "RESPECT • HONESTY • RESPONSIBILITY • PRIVACY",
        ru: "RESPECT (Уважение) • HONESTY (Честность) • RESPONSIBILITY (Ответственность) • PRIVACY (Приватность)",
      },
      {
        en: "SPEED • VIRALITY • ANONYMITY • AUTOMATION",
        ru: "SPEED • VIRALITY • ANONYMITY • AUTOMATION",
      },
      {
        en: "CAMERA • LIGHT • FRAME • EYES",
        ru: "CAMERA • LIGHT • FRAME • EYES",
      },
      {
        en: "ASK • INVOLVE • RELATE • RESET",
        ru: "ASK • INVOLVE • RELATE • RESET",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 13 defines Digital Ethics ('Knowing what is right and responsible in digital spaces') through four core principles: RESPECT, HONESTY, RESPONSIBILITY, and PRIVACY.",
      ru: "На слайде 13 выделены четыре фундаментальных принципа цифровой этики: RESPECT, HONESTY, RESPONSIBILITY, PRIVACY.",
    },
  },
  {
    id: "w3_018",
    topic: "W3",
    sourceType: "slides",
    sourceRef: {
      en: "W3 · Slide 14 (AI & Digital Communication)",
      ru: "W3 · Слайд 14 (ИИ и цифровая коммуникация)",
    },
    q: {
      en: "According to Slide 14, what are the 6 ways AI CAN help you in your studies, and the 5 risks you MUST avoid?",
      ru: "Согласно слайду 14, в каких 6 задачах ИИ МОЖЕТ помочь в учебе, и каких 5 рисков необходимо избегать?",
    },
    options: [
      {
        en: "Help: Brainstorm ideas, Improve grammar, Summarise info, Generate examples, Explain difficult concepts, Improve clarity | Avoid: Submitting AI work as your own, Copying without checking, Trusting inaccurate info, Sharing private/confidential data, Ignoring rules",
        ru: "Помощь: брейншторминг, грамматика, суммаризация, генерация примеров, объяснение сложных тем, улучшение ясности | Риски: сдача работы ИИ как своей, слепое копирование, доверие неточным данным, передача приватных данных, игнорирование правил",
      },
      {
        en: "Help: Write exams for you, Fabricate citations, Replace critical thinking | Avoid: Editing AI output, Verifying sources",
        ru: "Помощь: сдача экзаменов за вас, выдумывание ссылок, замена мышления | Риски: редактирование текста ИИ и проверка фактов",
      },
      {
        en: "Help: Upload confidential customer databases | Avoid: Brainstorming ideas and checking grammar",
        ru: "Помощь: загрузка закрытых баз клиентов | Риски: брейншторминг идей и проверка грамматики",
      },
      {
        en: "AI is completely banned from brainstorming or grammar checking in all situations",
        ru: "ИИ полностью запрещен даже для брейншторминга и проверки грамматики",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 14 lists those exact 6 benefits under 'AI Can Help You...' and 5 hazards under 'Risks to Avoid'.",
      ru: "Слайд 14 четко разделяет 6 полезных функций ИИ в учебе и 5 главных рисков, которых нужно избегать.",
    },
  },
  {
    id: "w3_019",
    topic: "W3",
    sourceType: "slides",
    sourceRef: {
      en: "W3 · Slide 15 (The AI Golden Rule)",
      ru: "W3 · Слайд 15 (Золотое правило ИИ)",
    },
    q: {
      en: "What are the 3 steps of 'The AI Golden Rule' on Slide 15?",
      ru: "Из каких 3 шагов состоит «Золотое правило ИИ» (The AI Golden Rule) на слайде 15?",
    },
    options: [
      {
        en: "1. ASK (Ask AI for help with ideas, grammar, summaries, or explanations) → 2. EDIT → OWN (Rewrite in your own voice; you are responsible) → 3. CHECK (Verify information carefully)",
        ru: "1. ASK (Попросить ИИ помочь с идеями, грамматикой, выжимкой или объяснением) → 2. EDIT → OWN (Переписать своими словами; вы несете ответственность) → 3. CHECK (Тщательно проверить факты)",
      },
      {
        en: "1. PROMPT → 2. COPY → 3. PASTE",
        ru: "1. PROMPT → 2. COPY → 3. PASTE",
      },
      {
        en: "1. GENERATE → 2. SUBMIT → 3. FORGET",
        ru: "1. GENERATE → 2. SUBMIT → 3. FORGET",
      },
      {
        en: "1. PAUSE → 2. CLARIFY → 3. SWITCH CHANNEL",
        ru: "1. PAUSE → 2. CLARIFY → 3. SWITCH CHANNEL",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 15 defines The AI Golden Rule as: 1. ASK → 2. EDIT → OWN → 3. CHECK ('Use AI to support your thinking, not replace it. Pause, verify, personalise.').",
      ru: "Золотое правило ИИ на слайде 15: 1. ASK → 2. EDIT → OWN → 3. CHECK («Используйте ИИ для поддержки мышления, а не его замены. Остановитесь, проверьте, персонализируйте»).",
    },
  },
  {
    id: "w3_020",
    topic: "W3",
    sourceType: "slides",
    sourceRef: {
      en: "W3 · Slide 16 (Activity: Send or Don't Send?)",
      ru: "W3 · Слайд 16 (Активность: Отправить, Изменить или Не отправлять?)",
    },
    q: {
      en: "In the 'Send or Don't Send?' activity on Slide 16, how should the 5 messages be evaluated using SEND, EDIT, or DON'T SEND?",
      ru: "Как следует оценить 5 сообщений из задания «Send or Don't Send?» на слайде 16 (SEND • EDIT • DON'T SEND)?",
    },
    options: [
      {
        en: "Messages 2 ('Good afternoon, Dr. Tan...') & 5 ('Good evening. Could someone confirm...') = SEND; Message 3 ('WHY DID I GET THIS MARK???') = DON'T SEND; Messages 1 ('hey prof u forgot...') & 4 ('Hi everyone!!! Anyone know...') = EDIT",
        ru: "Сообщения 2 («Good afternoon, Dr. Tan...») и 5 («Good evening. Could someone confirm...») = SEND; Сообщение 3 («WHY DID I GET THIS MARK???») = DON'T SEND; Сообщения 1 («hey prof u forgot...») и 4 («Hi everyone!!!...») = EDIT",
      },
      {
        en: "All 5 messages should be sent immediately without editing",
        ru: "Все 5 сообщений нужно сразу отправить (SEND) без изменений",
      },
      {
        en: "Message 3 ('WHY DID I GET THIS MARK???') = SEND; Message 2 & 5 = DON'T SEND",
        ru: "Сообщение 3 («WHY DID I GET THIS MARK???») = SEND; а сообщения 2 и 5 = DON'T SEND",
      },
      {
        en: "Message 1 ('hey prof u forgot to mark my assignment') is the most professional message",
        ru: "Сообщение 1 («hey prof u forgot to mark my assignment») является самым профессиональным",
      },
    ],
    correct: 0,
    explanation: {
      en: "Messages 2 and 5 are polite, clear, and respectful (SEND). Message 3 uses aggressive ALL CAPS (DON'T SEND). Messages 1 and 4 have valid purposes but need polite, clear rewriting (EDIT).",
      ru: "Сообщения 2 и 5 вежливы и конкретны (SEND). Сообщение 3 написано агрессивным КАПСОМ (DON'T SEND). Сообщения 1 и 4 содержат вопрос по делу, но требуют редактирования тона и формы (EDIT).",
    },
  },
  {
    id: "w3_021",
    topic: "W3",
    sourceType: "slides",
    sourceRef: {
      en: "W3 · Slide 17 (The 7 Golden Rules)",
      ru: "W3 · Слайд 17 (7 золотых правил)",
    },
    q: {
      en: "How are 'The 7 Golden Rules' grouped into 3 categories on Slide 17?",
      ru: "Как «7 золотых правил» (The 7 Golden Rules) сгруппированы в 3 категории на слайде 17?",
    },
    options: [
      {
        en: "Think & Communicate (1. Think before you send, 2. Be respectful, 3. Be clear and concise) | Tone & Privacy (4. Use the right tone, 5. Protect privacy and confidential info) | Verify & Technology (6. Check info before sharing, 7. Use AI responsibly)",
        ru: "Think & Communicate (1. Думай перед отправкой, 2. Будь уважителен, 3. Будь ясен и краток) | Tone & Privacy (4. Выбирай верный тон, 5. Защищай приватность и конфиденциальные данные) | Verify & Technology (6. Проверяй инфо перед репостом, 7. Используй ИИ ответственно)",
      },
      {
        en: "Forming, Storming, Norming, Performing, Adjourning, Competing, Avoiding",
        ru: "Forming, Storming, Norming, Performing, Adjourning, Competing, Avoiding",
      },
      {
        en: "Context, Action, Time, Access, Pace, Voice, Check",
        ru: "Context, Action, Time, Access, Pace, Voice, Check",
      },
      {
        en: "Sender, Message, Encoding, Channel, Receiver, Decoding, Feedback",
        ru: "Sender, Message, Encoding, Channel, Receiver, Decoding, Feedback",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 17 organizes the 7 Golden Rules into: Think & Communicate (1–3), Tone & Privacy (4–5), and Verify & Technology (6–7).",
      ru: "На слайде 17 вертикальная лента из 7 правил разбита именно на эти три группы: Think & Communicate (1–3), Tone & Privacy (4–5), Verify & Technology (6–7).",
    },
  },
  {
    id: "w3_022",
    topic: "W3",
    sourceType: "slides",
    sourceRef: {
      en: "W3 · Slide 19 (Final Takeaway)",
      ru: "W3 · Слайд 19 (Итоговый вывод)",
    },
    q: {
      en: "On Slide 19 ('Final Takeaway: Your Digital Behaviour Is Your Professional Identity'), what 3-stage career progression is shown, and what 4 items are on the checklist notepad?",
      ru: "Какая цепочка из 3 этапов карьерного пути изображена на слайде 19 («Final Takeaway») и какие 4 пункта отмечены галочками в блокноте?",
    },
    options: [
      {
        en: "Stages: University → Internship → Workplace | Checklist: THINK • RESPECT • CHECK • COMMUNICATE RESPONSIBLY.",
        ru: "Этапы: University → Internship → Workplace | Чек-лист: THINK • RESPECT • CHECK • COMMUNICATE RESPONSIBLY.",
      },
      {
        en: "Stages: School → Gap Year → Retirement | Checklist: POST • LIKE • SHARE • COMMENT.",
        ru: "Этапы: School → Gap Year → Retirement | Чек-лист: POST • LIKE • SHARE • COMMENT.",
      },
      {
        en: "Stages: Discover → Build → Launch | Checklist: CLEAR • POLITE • RE-READ • CONFIRM.",
        ru: "Этапы: Discover → Build → Launch | Чек-лист: CLEAR • POLITE • RE-READ • CONFIRM.",
      },
      {
        en: "Stages: Before → During → After | Checklist: PAUSE • CLARIFY • RESTATE • SWITCH.",
        ru: "Этапы: Before → During → After | Чек-лист: PAUSE • CLARIFY • RESTATE • SWITCH.",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 19 shows 'University → Internship → Workplace' ('What you practise now becomes your professional habit later') and the notepad checklist: THINK, RESPECT, CHECK, COMMUNICATE RESPONSIBLY.",
      ru: "Слайд 19 показывает путь «University → Internship → Workplace» и блокнот с 4 галочками: THINK, RESPECT, CHECK, COMMUNICATE RESPONSIBLY.",
    },
  },

  // ==========================================================================
  // TOPIC 3: W4 — OVERCOMING BARRIERS IN THE DIGITAL WORKPLACE (LECTURE 3)
  // ==========================================================================
  {
    id: "w4_001",
    topic: "W4",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W4 · Fill in the blanks Q1 / Slide 4 & 5",
      ru: "Moodle W4 · Заполните пропуски В1 / Слайд 4 и 5",
    },
    q: {
      en: "Weak connectivity, audio failure and software errors are examples of ______ barriers.",
      ru: "Слабое интернет-соединение, сбои звука и программные ошибки являются примерами ______ барьеров.",
    },
    options: [
      { en: "language", ru: "языковых (language)" },
      { en: "technical", ru: "технических (technical)" },
      { en: "cognitive", ru: "когнитивных (cognitive)" },
      { en: "cultural", ru: "культурных (cultural)" },
    ],
    correct: 1,
    explanation: {
      en: "Connectivity drops, software errors, and audio/video failures are Barrier 01: Technical barriers (glitches that interrupt the channel).",
      ru: "Обрывы связи, ошибки ПО и проблемы со звуком/видео — это Технические барьеры (Barrier 01: Technical glitches).",
    },
  },
  {
    id: "w4_002",
    topic: "W4",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W4 · Fill in the blanks Q2 / Slide 7",
      ru: "Moodle W4 · Заполните пропуски В2 / Слайд 7",
    },
    q: {
      en: "Jargon, idioms and assumptions can create ______ gaps.",
      ru: "Жаргон, идиомы и необоснованные предположения (assumptions) создают ______ разрывы (барьеры).",
    },
    options: [
      { en: "language", ru: "языковые (language)" },
      { en: "hardware", ru: "аппаратные (hardware)" },
      { en: "scheduling", ru: "расписания (scheduling)" },
      { en: "bandwidth", ru: "пропускной способности (bandwidth)" },
    ],
    correct: 0,
    explanation: {
      en: "Barrier 2 is Language Gaps: Jargon, idioms, and assumptions cause shared words not to create shared meaning.",
      ru: "Барьер №2 — это Языковые барьеры (Language Gaps): жаргон, идиомы и домыслы приводят к потере смысла.",
    },
  },
  {
    id: "w4_003",
    topic: "W4",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W4 · Fill in the blanks Q3 / Slide 9",
      ru: "Moodle W4 · Заполните пропуски В3 / Слайд 9",
    },
    q: {
      en: "The mental effort required to absorb, interpret and act on information is called ______.",
      ru: "Умственное усилие, необходимое для восприятия, интерпретации информации и действий на её основе, называется ______.",
    },
    options: [
      { en: "digital etiquette", ru: "цифровым этикетом (digital etiquette)" },
      { en: "cognitive load", ru: "когнитивной нагрузкой (cognitive load)" },
      { en: "connectivity", ru: "связностью (connectivity)" },
      { en: "channel bonding", ru: "объединением каналов (channel bonding)" },
    ],
    correct: 1,
    explanation: {
      en: "Barrier 3 is Cognitive Load: the mental effort required to absorb, interpret, and act on information.",
      ru: "Когнитивная нагрузка (Cognitive load) — это объем умственных усилий, необходимый для усвоения, интерпретации и обработки информации.",
    },
  },
  {
    id: "w4_004",
    topic: "W4",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W4 · Fill in the blanks Q4 / Slide 14",
      ru: "Moodle W4 · Заполните пропуски В4 / Слайд 14",
    },
    q: {
      en: "To reduce distraction during a Focus Sprint, silence ______ notifications and close unrelated apps.",
      ru: "Чтобы снизить отвлечение во время Focus Sprint, отключите ______ уведомления и закройте несвязанные приложения.",
    },
    options: [
      { en: "all essential", ru: "все критически важные (all essential)" },
      { en: "non-essential", ru: "второстепенные / неважные (non-essential)" },
      {
        en: "every teammate's",
        ru: "уведомления на устройствах всех коллег (every teammate's)",
      },
      { en: "emergency alarm", ru: "пожарную тревогу (emergency alarm)" },
    ],
    correct: 1,
    explanation: {
      en: "Step 1 of a 50-minute Focus Sprint is to silence non-essential notifications (while keeping calls/alerts from favorites if needed).",
      ru: "Первый шаг Focus Sprint — отключить неважные (non-essential) уведомления.",
    },
  },
  {
    id: "w4_005",
    topic: "W4",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W4 · Fill in the blanks Q5 / Slide 17 & 19",
      ru: "Moodle W4 · Заполните пропуски В5 / Слайд 17 и 19",
    },
    q: {
      en: "When a text seems rude or confusing, ______ the meaning before reacting.",
      ru: "Когда текстовое сообщение кажется грубым или непонятным, сначала ______ его смысл, прежде чем реагировать.",
    },
    options: [
      { en: "assume", ru: "додумайте (assume)" },
      { en: "ignore", ru: "проигнорируйте (ignore)" },
      { en: "clarify", ru: "проясните / уточните (clarify)" },
      { en: "escalate", ru: "обострите (escalate)" },
    ],
    correct: 2,
    explanation: {
      en: "Because text lacks facial expressions and tone, always pause and clarify intent before judging tone or reacting.",
      ru: "Так как текст не передает мимику и интонацию, перед реакцией всегда нужно уточнить (clarify), что именно имел в виду собеседник.",
    },
  },
  {
    id: "w4_006",
    topic: "W4",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W4 · Workplace Scenario 1 / Slide 18",
      ru: "Moodle W4 · Рабочий сценарий 1 / Слайд 18",
    },
    q: {
      en: "Scenario 1 ('The call froze. The meeting didn’t.'): Your group is presenting a project update to a client when the host’s internet connection drops. The team has five minutes left. What is the best response?",
      ru: "Сценарий 1 («Звонок завис. Встреча — нет»): Ваша группа презентует проект клиенту, и у организатора (хоста) обрывается интернет. Осталось 5 минут. Какое действие лучшее?",
    },
    options: [
      {
        en: "Stop the meeting and wait until the host reconnects.",
        ru: "Остановить встречу и молча ждать, пока хост переподключится.",
      },
      {
        en: "Use the agreed backup channel, let the group know what is happening, and recap the discussion when the host returns.",
        ru: "Использовать заранее согласованный резервный план/канал (со-ведущий включает слайды, телефонный дозвон), сообщить в чат и кратко резюмировать итог, когда хост вернется.",
      },
      {
        en: "Continue without telling anyone and hope the host catches up.",
        ru: "Продолжать как ни в чем не бывало, никому ничего не объясняя.",
      },
      {
        en: "Cancel the client project immediately.",
        ru: "Немедленно отменить клиентский проект.",
      },
    ],
    correct: 1,
    explanation: {
      en: "Following CHECK → BACK UP → SIGNAL → RESUME: use the backup plan (co-host shares deck, dial-in backup), signal clearly in chat, and share a brief recap when the host returns. Lesson: Backup plans protect momentum.",
      ru: "По правилу CHECK → BACK UP → SIGNAL → RESUME команда задействует резервный план, сообщает о ситуации в чате и делает краткий пересказ (recap), когда ведущий возвращается. Урок: резервный план сохраняет темп работы.",
    },
  },
  {
    id: "w4_007",
    topic: "W4",
    sourceType: "moodle",
    sourceRef: {
      en: "Moodle W4 · Workplace Scenario 2 / Slide 19",
      ru: "Moodle W4 · Рабочий сценарий 2 / Слайд 19",
    },
    q: {
      en: "Scenario 2 ('“Fine.” Wasn’t fine.'): A teammate replies “Fine.” to your project suggestion. You think they are annoyed and feel like sending a sharp reply. What should you do first?",
      ru: "Сценарий 2 («“Fine.” не значило ничего плохого»): Коллега отвечает «Fine.» на ваше предложение по проекту. Вам кажется, что он раздражен, и хочется ответить резко. Что нужно сделать в первую очередь?",
    },
    options: [
      {
        en: "Reply immediately and tell them to be more respectful.",
        ru: "Немедленно ответить и потребовать более уважительного тона.",
      },
      {
        en: "Assume they agree and make the decision for the team.",
        ru: "Решить, что он полностью согласен, и принять решение за всю команду.",
      },
      {
        en: "Pause, ask whether they mean approval or want to discuss it, and switch to a call if needed.",
        ru: "Сделать паузу, вежливо уточнить («Ты имеешь в виду, что одобряешь, или нам стоит обсудить?») и при необходимости созвониться.",
      },
      {
        en: "Screenshot the message and complain on social media.",
        ru: "Сделать скриншот и пожаловаться в соцсетях.",
      },
    ],
    correct: 2,
    explanation: {
      en: "On Slide 19, asking 'Did you mean approved, or should we discuss?' and having a quick 2-minute call revealed both teammates were simply rushing. Takeaway: Clarify intent before judging tone.",
      ru: "На слайде 19 уточняющий вопрос «Did you mean approved, or should we discuss?» и 2-минутный звонок показали, что оба просто спешили. Вывод: проясняйте намерение до того, как судить о тоне.",
    },
  },
  {
    id: "w4_008",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 3 & 4 (Definition & Three Barriers)",
      ru: "W4 · Слайд 3 и 4 (Определение и 3 барьера)",
    },
    q: {
      en: "How does Slide 4 define a 'Digital Communication Barrier', and what statement does Slide 3 make about clear communication?",
      ru: "Как слайд 4 определяет «Цифровой коммуникационный барьер» и какую ключевую фразу о ясной коммуникации содержит слайд 3?",
    },
    options: [
      {
        en: "Definition: 'Anything that distorts, delays, or overloads a message between people' — and Slide 3 states: 'Clear communication is infrastructure.'",
        ru: "Определение: «Всё, что искажает, задерживает или перегружает сообщение между людьми» — а на слайде 3 сказано: «Clear communication is infrastructure» (Ясная коммуникация — это инфраструктура).",
      },
      {
        en: "Definition: 'Only hardware failures in routers' — and Slide 3 states: 'Multitasking is mandatory.'",
        ru: "Определение: «Только аппаратные поломки роутеров» — а на слайде 3 сказано: «Многозадачность обязательна».",
      },
      {
        en: "Definition: 'Speaking two different native languages' — and Slide 3 states: 'Silence equals agreement.'",
        ru: "Определение: «Разговор на двух разных родных языках» — а на слайде 3 сказано: «Молчание — знак согласия».",
      },
      {
        en: "Definition: 'Using email instead of chat' — and Slide 3 states: 'More alerts mean higher productivity.'",
        ru: "Определение: «Использование почты вместо чата» — а на слайде 3 сказано: «Чем больше уведомлений, тем выше продуктивность».",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 3 highlights 'Clear communication is infrastructure.' Slide 4 defines digital communication barriers as 'Anything that distorts, delays, or overloads a message between people.'",
      ru: "Слайд 3 провозглашает: «Clear communication is infrastructure», а слайд 4 дает точное определение барьера: «Anything that distorts, delays, or overloads a message between people».",
    },
  },
  {
    id: "w4_009",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 5 (Barrier 01: Technical Glitches Flow)",
      ru: "W4 · Слайд 5 (Барьер 01: Цепочка технического сбоя)",
    },
    q: {
      en: "On Slide 5 ('Barrier 01: Technical glitches break the flow'), what are the 3 numbered steps showing what happens in the moment of a technical glitch?",
      ru: "Каковы 3 пронумерованных этапа того, что происходит в момент технического сбоя на слайде 5 («Barrier 01: Technical glitches break the flow»)?",
    },
    options: [
      {
        en: "1. INTERRUPT (The signal, platform, or device fails) → 2. RECOVER (People pause, repeat, or switch channels) → 3. IMPACT (Context is lost and progress slows)",
        ru: "1. INTERRUPT (Сигнал, платформа или устройство дает сбой) → 2. RECOVER (Люди делают паузу, повторяют или меняют канал) → 3. IMPACT (Контекст теряется, а прогресс замедляется)",
      },
      {
        en: "1. CHECK → 2. BACK UP → 3. RESUME",
        ru: "1. CHECK → 2. BACK UP → 3. RESUME",
      },
      {
        en: "1. PAUSE → 2. CLARIFY → 3. RESTATE",
        ru: "1. PAUSE → 2. CLARIFY → 3. RESTATE",
      },
      {
        en: "1. FORMING → 2. STORMING → 3. NORMING",
        ru: "1. FORMING → 2. STORMING → 3. NORMING",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 5 shows the 3-step sequence of a glitch: 1. INTERRUPT → 2. RECOVER → 3. IMPACT.",
      ru: "На слайде 5 показаны 3 шага: 1. INTERRUPT → 2. RECOVER → 3. IMPACT.",
    },
  },
  {
    id: "w4_010",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 6 (Managing Technical Glitches)",
      ru: "W4 · Слайд 6 (Управление техническими сбоями)",
    },
    q: {
      en: "What are the 4 numbered steps on Slide 6 ('Managing Technical Glitches: Prepare the recovery path before the problem appears')?",
      ru: "Какие 4 пронумерованных шага приведены на слайде 6 («Managing Technical Glitches: Prepare the recovery path before the problem appears»)?",
    },
    options: [
      {
        en: "01 CHECK (Test connection, mic, and camera) → 02 BACK UP (Keep a dial-in or second platform ready) → 03 SIGNAL (Name the issue clearly in chat) → 04 RESUME (Share a recap and next action)",
        ru: "01 CHECK (Проверить связь, микрофон и камеру) → 02 BACK UP (Держать наготове телефонный дозвон или 2-ю платформу) → 03 SIGNAL (Четко сообщить о проблеме в чате) → 04 RESUME (Дать краткое резюме и следующий шаг)",
      },
      {
        en: "01 CLEAR → 02 POLITE → 03 RE-READ → 04 CONFIRM",
        ru: "01 CLEAR → 02 POLITE → 03 RE-READ → 04 CONFIRM",
      },
      {
        en: "01 PLAIN → 02 CHECK → 03 SUPPORT → 04 INCLUDE",
        ru: "01 PLAIN → 02 CHECK → 03 SUPPORT → 04 INCLUDE",
      },
      {
        en: "01 CHUNK IT → 02 SAY IT SIMPLY → 03 SHOW THE POINT → 04 PAUSE TO RESET",
        ru: "01 CHUNK IT → 02 SAY IT SIMPLY → 03 SHOW THE POINT → 04 PAUSE TO RESET",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 6 outlines: 01 CHECK, 02 BACK UP, 03 SIGNAL, and 04 RESUME.",
      ru: "На слайде 6 дана четкая схема из 4 шагов: 01 CHECK → 02 BACK UP → 03 SIGNAL → 04 RESUME.",
    },
  },
  {
    id: "w4_011",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 7 (Barrier 2 — Language Gaps Examples)",
      ru: "W4 · Слайд 7 (Барьер 2 — Языковые разрывы и примеры)",
    },
    q: {
      en: "On Slide 7 ('Barrier 2 — Language Gaps'), what specific examples are shown on the three photo-cards for JARGON, IDIOMS, and ASSUMPTIONS?",
      ru: "Какие конкретные примеры изображены на трех карточках JARGON, IDIOMS и ASSUMPTIONS на слайде 7 («Barrier 2 — Language Gaps»)?",
    },
    options: [
      {
        en: "JARGON: 'NORTH STAR → OPERATIONALIZE → ALIGNMENT' | IDIOMS: 'Let's hit it out of the park.' | ASSUMPTIONS: 'Silence does not always mean agreement.'",
        ru: "JARGON: «NORTH STAR → OPERATIONALIZE → ALIGNMENT» | IDIOMS: «Let's hit it out of the park.» | ASSUMPTIONS: «Silence does not always mean agreement.»",
      },
      {
        en: "JARGON: 'HTML/CSS' | IDIOMS: 'Break a leg' | ASSUMPTIONS: 'Cameras must be off'",
        ru: "JARGON: «HTML/CSS» | IDIOMS: «Break a leg» | ASSUMPTIONS: «Камеры должны быть выключены»",
      },
      {
        en: "JARGON: '342 New emails' | IDIOMS: '50 minutes' | ASSUMPTIONS: '40% attention'",
        ru: "JARGON: «342 New emails» | IDIOMS: «50 minutes» | ASSUMPTIONS: «40% attention»",
      },
      {
        en: "JARGON: 'Do it again' | IDIOMS: 'Fine' | ASSUMPTIONS: 'Whatever'",
        ru: "JARGON: «Do it again» | IDIOMS: «Fine» | ASSUMPTIONS: «Whatever»",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 7 shows a board with 'NORTH STAR → OPERATIONALIZE → ALIGNMENT' under JARGON, the phrase 'Let's hit it out of the park.' under IDIOMS, and 'Silence does not always mean agreement.' under ASSUMPTIONS.",
      ru: "На слайде 7 приведены именно эти 3 иллюстрации: «NORTH STAR → OPERATIONALIZE → ALIGNMENT» (Jargon), «Let's hit it out of the park.» (Idioms) и «Silence does not always mean agreement.» (Assumptions).",
    },
  },
  {
    id: "w4_012",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 8 (Bridge the Gap & Rule of Thumb)",
      ru: "W4 · Слайд 8 (Преодоление языкового барьера и главное правило)",
    },
    q: {
      en: "What are the 4 steps to 'Bridge the Gap' on Slide 8, and what is the 'Rule of thumb' at the bottom of the slide?",
      ru: "Каковы 4 шага преодоления языкового барьера («Bridge the Gap») на слайде 8 и как звучит «Rule of thumb» (практическое правило) внизу слайда?",
    },
    options: [
      {
        en: "Steps: 1. PLAIN (Use familiar words) → 2. CHECK (Invite a summary, e.g., 'So what I'm hearing is...') → 3. SUPPORT (Use translation tools) → 4. INCLUDE (Make questions safe) | Rule of thumb: 'if a phrase is difficult to translate, rewrite it.'",
        ru: "Шаги: 1. PLAIN (Простые слова) → 2. CHECK (Попросить резюмировать) → 3. SUPPORT (Использовать переводчики) → 4. INCLUDE (Сделать вопросы безопасными) | Правило: «если фразу трудно перевести, перепишите её проще».",
      },
      {
        en: "Steps: 1. SPEAK LOUDER → 2. USE IDIOMS → 3. ASSUME AGREEMENT → 4. END CALL | Rule of thumb: 'never use translation tools.'",
        ru: "Шаги: 1. ГОВОРИТЬ ГРОМЧЕ → 2. ИСПОЛЬЗОВАТЬ ИДИОМЫ → 3. СЧИТАТЬ МОЛЧАНИЕ СОГЛАСИЕМ → 4. ЗАВЕРШИТЬ ЗВОНОК",
      },
      {
        en: "Steps: 1. ASK → 2. INVOLVE → 3. RELATE → 4. RESET | Rule of thumb: 'one click away from distraction.'",
        ru: "Шаги: 1. ASK → 2. INVOLVE → 3. RELATE → 4. RESET | Правило: «в одном клике от отвлечения».",
      },
      {
        en: "Steps: 1. NOTICE → 2. CHECK → 3. ADAPT → 4. LEARN | Rule of thumb: 'emojis are universal.'",
        ru: "Шаги: 1. NOTICE → 2. CHECK → 3. ADAPT → 4. LEARN | Правило: «эмодзи универсальны».",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 8 lists 1. PLAIN → 2. CHECK → 3. SUPPORT → 4. INCLUDE and the bottom Rule of thumb: 'if a phrase is difficult to translate, rewrite it.'",
      ru: "Слайд 8 содержит цепочку 1. PLAIN → 2. CHECK → 3. SUPPORT → 4. INCLUDE и правило внизу: «Rule of thumb: if a phrase is difficult to translate, rewrite it».",
    },
  },
  {
    id: "w4_013",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 9 (Barrier 3: Cognitive Load — 3 Minutes Stat)",
      ru: "W4 · Слайд 9 (Когнитивная нагрузка — статистика про 3 минуты)",
    },
    q: {
      en: "According to the highlighted orange card on Slide 9 ('Barrier 3: Cognitive Load'), how often do employees switch tasks on average?",
      ru: "Согласно выделенной оранжевой рамкой карточке на слайде 9 («Barrier 3: Cognitive Load»), как часто сотрудники в среднем переключаются между задачами?",
    },
    options: [
      {
        en: "Every 3 minutes ('3 min — Employees switch tasks every three minutes on average')",
        ru: "Каждые 3 минуты («3 min — Employees switch tasks every three minutes on average»)",
      },
      {
        en: "Every 50 minutes",
        ru: "Каждые 50 минут",
      },
      {
        en: "Every 60 seconds",
        ru: "Каждые 60 секунд",
      },
      {
        en: "Every 2 hours",
        ru: "Каждые 2 часа",
      },
    ],
    correct: 0,
    explanation: {
      en: "Card 2 ('Attention switches') on Slide 9 displays in large text: '3 min — Employees switch tasks every three minutes on average.'",
      ru: "На второй карточке слайда 9 крупно написано: «3 min — Employees switch tasks every three minutes on average».",
    },
  },
  {
    id: "w4_014",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 10 (Make the Message Lighter)",
      ru: "W4 · Слайд 10 (Сделайте сообщение легче для восприятия)",
    },
    q: {
      en: "What are the 4 strategies to 'Make the Message Lighter' ('Reduce effort without reducing meaning') on Slide 10?",
      ru: "Какие 4 способа «облегчить сообщение» («Make the Message Lighter: Reduce effort without reducing meaning») представлены на слайде 10?",
    },
    options: [
      {
        en: "01 CHUNK IT (One topic per block), 02 SAY IT SIMPLY (Lead with the action), 03 SHOW THE POINT (Add a visual summary, e.g., DISCOVER → BUILD → LAUNCH → IMPACT), 04 PAUSE TO RESET (Protect recovery time)",
        ru: "01 CHUNK IT (Одна тема на блок), 02 SAY IT SIMPLY (Начинайте с нужного действия), 03 SHOW THE POINT (Добавьте визуальную схему), 04 PAUSE TO RESET (Защищайте время на восстановление)",
      },
      {
        en: "01 WRITE LONG PARAGRAPHS, 02 HIDE THE DEADLINE, 03 USE 10 FONTS, 04 SEND AT MIDNIGHT",
        ru: "01 ДЛИННЫЕ АБЗАЦЫ, 02 СКРЫТЬ ДЕДЛАЙН, 03 10 ШРИФТОВ, 04 ОТПРАВИТЬ В ПОЛНОЧЬ",
      },
      {
        en: "01 INTERRUPT, 02 RECOVER, 03 IMPACT, 04 OVERLOAD",
        ru: "01 INTERRUPT, 02 RECOVER, 03 IMPACT, 04 OVERLOAD",
      },
      {
        en: "01 COMPETE, 02 COLLABORATE, 03 AVOID, 04 GIVE IN",
        ru: "01 COMPETE, 02 COLLABORATE, 03 AVOID, 04 GIVE IN",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 10 and Moodle W4 Section 3 list: 01 CHUNK IT, 02 SAY IT SIMPLY, 03 SHOW THE POINT, and 04 PAUSE TO RESET (Protect recovery time).",
      ru: "Слайд 10 и раздел 3 урока в Moodle выделяют эти 4 приема снижения когнитивной нагрузки: CHUNK IT, SAY IT SIMPLY, SHOW THE POINT, PAUSE TO RESET.",
    },
  },
  {
    id: "w4_015",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 11 & 12 (Information Overload & Notification Overload)",
      ru: "W4 · Слайд 11 и 12 (Информационная перегрузка и уведомления)",
    },
    q: {
      en: "According to Slide 11 ('Information overload steals focus'), what three negative effects do excess emails, chats, and alerts create, and how many 'New emails' are shown on the overloaded laptop screen?",
      ru: "Какие три негативных эффекта вызывают избыточные письма, чаты и уведомления согласно слайду 11 («Information overload steals focus»), и сколько новых писем («New emails») показано на экране перегруженного ноутбука?",
    },
    options: [
      {
        en: "They create stress, decision fatigue, and shallow attention — and the laptop screen shows '342 New emails'",
        ru: "Они вызывают стресс (stress), усталость от принятия решений (decision fatigue) и поверхностное внимание (shallow attention) — а на экране написано «342 New emails»",
      },
      {
        en: "They create high trust, deep focus, and psychological safety — and the screen shows '0 New emails'",
        ru: "Они создают высокое доверие, глубокий фокус и психологическую безопасность — а на экране «0 New emails»",
      },
      {
        en: "They create hardware failure, cable cuts, and power outages — and the screen shows '4,000 New emails'",
        ru: "Они вызывают поломку железа, обрыв кабелей и отключение света — а на экране «4,000 New emails»",
      },
      {
        en: "They create groupthink, storming, and adjourning — and the screen shows '15,000 New emails'",
        ru: "Они вызывают групповое мышление, шторминг и распад команды — а на экране «15,000 New emails»",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 11 states: 'Excess email, chats, and alerts create stress, decision fatigue, and shallow attention.' The laptop displays a red badge reading '342 New emails'.",
      ru: "На слайде 11 указано, что избыток писем, чатов и оповещений вызывает стресс, усталость от решений и поверхностное внимание, а на экране ноутбука горит плашка «342 New emails».",
    },
  },
  {
    id: "w4_016",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 13 (Reducing Digital Distractions)",
      ru: "W4 · Слайд 13 (Снижение цифровых отвлечений)",
    },
    q: {
      en: "On Slide 13 ('Reducing Digital Distractions: Every interruption carries a restart cost'), what are 'The usual suspects' of distraction, and what percentage of attention is shown remaining in Panel 2 ('REDUCED ATTENTION')?",
      ru: "Какие три главных источника отвлечения названы «The usual suspects» на слайде 13, и какой процент оставшегося внимания указан на индикаторе во второй панели («REDUCED ATTENTION»)?",
    },
    options: [
      {
        en: "The usual suspects: Social feeds, Unrelated apps, Constant multitasking — and Panel 2 shows '40% attention remaining'",
        ru: "Главные виновники: Ленты соцсетей (Social feeds), Несвязанные приложения (Unrelated apps), Постоянная многозадачность (Constant multitasking) — а индикатор показывает «40% attention remaining»",
      },
      {
        en: "The usual suspects: Plain language, Short messages, Visual summaries — and Panel 2 shows '100% attention remaining'",
        ru: "Главные виновники: Простой язык, Короткие сообщения, Визуальные схемы — а индикатор показывает «100% attention remaining»",
      },
      {
        en: "The usual suspects: Focus sprints, Do Not Disturb mode, Clean desks — and Panel 2 shows '95% attention remaining'",
        ru: "Главные виновники: Фокус-спринты, режим «Не беспокоить», чистый стол — а индикатор показывает «95% attention remaining»",
      },
      {
        en: "The usual suspects: Backup dial-in, Co-host deck, Meeting recap — and Panel 2 shows '10% attention remaining'",
        ru: "Главные виновники: Резервный дозвон, слайды со-ведущего, итоги встречи — а индикатор показывает «10% attention remaining»",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 13 lists 'The usual suspects' as Social feeds, Unrelated apps, and Constant multitasking, and the 4-panel chain shows: 1. INTERRUPTION → 2. REDUCED ATTENTION (40% attention remaining) → 3. LOWER-QUALITY WORK → 4. FOCUS PROTECTED.",
      ru: "На слайде 13 в карточке «The usual suspects» перечислены Social feeds, Unrelated apps и Constant multitasking, а во втором блоке цепочки указано «40% attention remaining».",
    },
  },
  {
    id: "w4_017",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 14 (Build a Focus Sprint)",
      ru: "W4 · Слайд 14 (Построение Focus Sprint)",
    },
    q: {
      en: "How long is a 'Focus Sprint' on Slide 14, and what are its 3 practical steps?",
      ru: "Какова продолжительность «Focus Sprint» на слайде 14 и из каких 3 практических шагов он состоит?",
    },
    options: [
      {
        en: "50 MINUTES — 1) Silence non-essential notifications, 2) Choose one meaningful outcome, 3) Close unrelated apps and tabs (finish the first outcome before switching contexts)",
        ru: "50 МИНУТ — 1) Отключить неважные уведомления, 2) Выбрать один конкретный значимый результат, 3) Закрыть несвязанные приложения и вкладки (завершить задачу до переключения контекста)",
      },
      {
        en: "3 MINUTES — 1) Open all chat apps, 2) Multitask across 5 tabs, 3) Reply to 342 emails",
        ru: "3 МИНУТЫ — 1) Открыть все чаты, 2) Работать в 5 вкладках одновременно, 3) Ответить на 342 письма",
      },
      {
        en: "10 SECONDS — 1) Pause, 2) THINK, 3) Press Send",
        ru: "10 СЕКУНД — 1) Остановиться, 2) Подумать по THINK, 3) Нажать Отправить",
      },
      {
        en: "2 MINUTES — 1) Think quietly, 2) Write inner message, 3) Share one word",
        ru: "2 МИНУТЫ — 1) Подумать в тишине, 2) Записать внутреннее сообщение, 3) Поделиться одним словом",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 14 defines a Focus Sprint as a 50-minute reset with those 3 steps and gives the example: 'draft the client summary before reopening chat.'",
      ru: "На слайде 14 Focus Sprint длится ровно 50 минут и включает эти 3 шага (пример со слайда: сначала написать клиентское резюме и только потом открывать чат).",
    },
  },
  {
    id: "w4_018",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 15 & 16 (Text Misunderstandings & 4 Quick Checks)",
      ru: "W4 · Слайд 15 и 16 (Недопонимание в тексте и 4 быстрые проверки)",
    },
    q: {
      en: "What are the 4 quick checks on Slide 16 ('Write So People Understand: Use these four quick checks before you press send'), and how is the vague phrase 'Do it again.' rewritten?",
      ru: "Каковы 4 быстрые проверки перед отправкой сообщения на слайде 16 («Write So People Understand») и как там исправлена слишком размытая фраза «Do it again.»?",
    },
    options: [
      {
        en: "1. CLEAR, 2. POLITE, 3. RE-READ, 4. CONFIRM — and 'Do it again.' becomes 'Could you update the final section and send it by 3 p.m.?'",
        ru: "1. CLEAR (Ясно), 2. POLITE (Вежливо), 3. RE-READ (Перечитать), 4. CONFIRM (Попросить подтвердить) — а «Do it again.» меняется на «Could you update the final section and send it by 3 p.m.?»",
      },
      {
        en: "1. SHORT, 2. BLUNT, 3. FAST, 4. URGENT — and 'Do it again.' becomes 'REDO THIS NOW!'",
        ru: "1. SHORT, 2. BLUNT, 3. FAST, 4. URGENT — а «Do it again.» меняется на «REDO THIS NOW!»",
      },
      {
        en: "1. ASK, 2. EDIT, 3. OWN, 4. CHECK — and 'Do it again.' becomes 'Can you redo this?'",
        ru: "1. ASK, 2. EDIT, 3. OWN, 4. CHECK — а «Do it again.» меняется на «Can you redo this?»",
      },
      {
        en: "1. PAUSE, 2. CLARIFY, 3. RESTATE, 4. SWITCH — and 'Do it again.' becomes 'Fine.'",
        ru: "1. PAUSE, 2. CLARIFY, 3. RESTATE, 4. SWITCH — а «Do it again.» меняется на «Fine.»",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 16 presents the 4 checks: 1. CLEAR, 2. POLITE, 3. RE-READ, 4. CONFIRM, and contrasts Too vague ('Do it again.') with Clearer ('Could you update the final section and send it by 3 p.m.?').",
      ru: "На слайде 16 даны 4 проверки: CLEAR, POLITE, RE-READ, CONFIRM и пример превращения «Do it again.» в вежливую и конкретную просьбу с дедлайном до 3 p.m.",
    },
  },
  {
    id: "w4_019",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 17 (How to Calm a Text Conflict)",
      ru: "W4 · Слайд 17 (Как успокоить конфликт в переписке)",
    },
    q: {
      en: "What is the exact 4-step sequence on Slide 17 ('How to Calm a Text Conflict'), and what polite phrase is suggested instead of replying “Whatever.”?",
      ru: "Какова точная последовательность из 4 шагов на слайде 17 («How to Calm a Text Conflict») и какая фраза предлагается вместо резкого ответа «Whatever.»?",
    },
    options: [
      {
        en: "1. PAUSE → 2. CLARIFY → 3. RESTATE → 4. SWITCH CHANNEL — Instead of 'Whatever.', try: 'I'm not sure what you mean. Can we talk about it?'",
        ru: "1. PAUSE (Сделать паузу) → 2. CLARIFY (Уточнить) → 3. RESTATE (Пересказать своими словами) → 4. SWITCH CHANNEL (Сменить канал на звонок/личную встречу) — Вместо «Whatever.»: «I'm not sure what you mean. Can we talk about it?»",
      },
      {
        en: "1. SCREENSHOT → 2. FORWARD → 3. BLOCK → 4. LEAVE GROUP — Instead of 'Whatever.', try: 'K.'",
        ru: "1. SCREENSHOT → 2. FORWARD → 3. BLOCK → 4. LEAVE GROUP — Вместо «Whatever.»: «K.»",
      },
      {
        en: "1. INTERRUPT → 2. RECOVER → 3. IMPACT → 4. RESUME — Instead of 'Whatever.', try: 'Fine.'",
        ru: "1. INTERRUPT → 2. RECOVER → 3. IMPACT → 4. RESUME — Вместо «Whatever.»: «Fine.»",
      },
      {
        en: "1. LISTEN → 2. PAUSE → 3. CLARIFY → 4. ANSWER — Instead of 'Whatever.', try: 'Do it again.'",
        ru: "1. LISTEN → 2. PAUSE → 3. CLARIFY → 4. ANSWER — Вместо «Whatever.»: «Do it again.»",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 17 details: 1. PAUSE, 2. CLARIFY, 3. RESTATE, 4. SWITCH CHANNEL, and recommends replacing 'Whatever.' with 'I'm not sure what you mean. Can we talk about it?'.",
      ru: "Слайд 17 задает алгоритм деэскалации: PAUSE → CLARIFY → RESTATE → SWITCH CHANNEL и замену «Whatever.» на конструктивное предложение обсудить вопрос.",
    },
  },
  {
    id: "w4_020",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 20 (Three Habits for Better Digital Communication)",
      ru: "W4 · Слайд 20 (Три привычки для лучшей цифровой коммуникации)",
    },
    q: {
      en: "What are the 'Three Habits for Better Digital Communication' on Slide 20, and what is the 3-part motto after 'Remember:'?",
      ru: "Каковы «Три привычки для лучшей цифровой коммуникации» на слайде 20 и какая трехчастная формула стоит после слова «Remember:»?",
    },
    options: [
      {
        en: "Habits: 1. PREPARE, 2. SIMPLIFY, 3. HUMANIZE | Remember: 'Notice the barrier. Reduce the friction. Repair the connection.'",
        ru: "Привычки: 1. PREPARE (Готовьтесь), 2. SIMPLIFY (Упрощайте), 3. HUMANIZE (Будьте человечны) | Девиз: «Notice the barrier. Reduce the friction. Repair the connection.»",
      },
      {
        en: "Habits: 1. VISUAL, 2. PROFESSIONAL, 3. CLEAR | Remember: 'Speak. Engage. Connect.'",
        ru: "Привычки: 1. VISUAL, 2. PROFESSIONAL, 3. CLEAR | Девиз: «Speak. Engage. Connect.»",
      },
      {
        en: "Habits: 1. VOICE, 2. VISUALS, 3. PRESENCE | Remember: 'Pause. THINK. Then send.'",
        ru: "Привычки: 1. VOICE, 2. VISUALS, 3. PRESENCE | Девиз: «Pause. THINK. Then send.»",
      },
      {
        en: "Habits: 1. ASK, 2. EDIT, 3. CHECK | Remember: 'Direct equals clear.'",
        ru: "Привычки: 1. ASK, 2. EDIT, 3. CHECK | Девиз: «Direct equals clear.»",
      },
    ],
    correct: 0,
    explanation: {
      en: "Slide 20 summarizes the chapter into 1. PREPARE, 2. SIMPLIFY, 3. HUMANIZE and the motto: 'Notice the barrier. Reduce the friction. Repair the connection.'",
      ru: "Слайд 20 подводит итог лекции тремя привычками: PREPARE, SIMPLIFY, HUMANIZE и ключевой формулой: «Notice the barrier. Reduce the friction. Repair the connection».",
    },
  },
  {
    id: "w4_021",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slides 21 & 22 (Case 1 — 'settle')",
      ru: "W4 · Слайды 21 и 22 (Кейс 1 — слово «settle»)",
    },
    q: {
      en: "In Case 1 (Slides 21 & 22), an international student writes in a group chat: “Can you settle this by today?” Some members think 'settle' means completing the entire assignment, while others think it means paying for something, causing the group to miss the deadline. Which barrier is this and how should it be solved?",
      ru: "В Кейсе 1 (Слайды 21 и 22) иностранный студент пишет в групповом чате: «Can you settle this by today?». Одни участники понимают «settle» как завершение всего задания, а другие — как оплату счета, из-за чего группа пропускает дедлайн. Какой это барьер и как его решить?",
    },
    options: [
      {
        en: "Language gap & ambiguity (local slang/colloquialism) — solve by using plain, explicit language (stating the exact task, owner, and deadline) and checking understanding",
        ru: "Языковой барьер и двусмысленность (локальное выражение «settle») — решается использованием простого и конкретного языка (четкое указание задачи, ответственного и времени) и проверкой понимания",
      },
      {
        en: "Technical glitch — solve by switching to a mobile hotspot",
        ru: "Технический сбой — решается переключением на мобильный хотспот",
      },
      {
        en: "Hardware failure — solve by buying a new microphone",
        ru: "Аппаратная поломка — решается покупкой нового микрофона",
      },
      {
        en: "Cloud permission error — solve by changing Google Drive access settings",
        ru: "Ошибка прав доступа в облаке — решается настройкой Google Drive",
      },
    ],
    correct: 0,
    explanation: {
      en: "Case 1 illustrates a Language Gap where a culturally specific usage ('settle') is interpreted differently. Using plain, specific language ('Could you submit the final report by 5 PM today?') prevents false assumptions.",
      ru: "Кейс 1 демонстрирует языковой барьер (Language Gap), когда многозначное слово «settle» трактуется по-разному. Нужно писать конкретно, какое действие и к какому сроку требуется.",
    },
  },
  {
    id: "w4_022",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 23 (Case 2 — 'Access Denied')",
      ru: "W4 · Слайд 23 (Кейс 2 — «Access Denied»)",
    },
    q: {
      en: "In Case 2 (Slide 23), a group member uploads their presentation to a cloud drive but forgets to change the access permissions, so the lecturer sees an 'Access Denied' message right before the presentation begins. Which habit and step would have prevented this?",
      ru: "В Кейсе 2 (Слайд 23) участник группы загружает презентацию в облако, но забывает открыть доступ по ссылке, и преподаватель видит «Access Denied» прямо перед защитой. Какая привычка и шаг предотвратили бы эту проблему?",
    },
    options: [
      {
        en: "Habit 1: PREPARE (01 CHECK & 02 BACK UP) — testing file access permissions beforehand and keeping a local/shared backup copy with teammates",
        ru: "Привычка 1: PREPARE (01 CHECK и 02 BACK UP) — заблаговременная проверка прав доступа к файлу и наличие резервной копии презентации у участников команды",
      },
      {
        en: "Playing a mobile game during the lecture",
        ru: "Игра в мобильную игру во время лекции",
      },
      {
        en: "Using idioms like 'Let's hit it out of the park'",
        ru: "Использование идиом вроде «Let's hit it out of the park»",
      },
      {
        en: "Sending voice notes in ALL CAPS",
        ru: "Отправка голосовых сообщений и текста КАПСОМ",
      },
    ],
    correct: 0,
    explanation: {
      en: "Case 2 is a technical/access preparation barrier. Checking permissions ahead of time (CHECK) and sharing backup files with a co-host/teammate (BACK UP / PREPARE) prevents presentation delays.",
      ru: "Кейс 2 — это технический и организационный барьер доступа. Предварительная проверка ссылки (CHECK) и наличие локальной копии файла у содокладчиков (PREPARE / BACK UP) полностью решают проблему.",
    },
  },
  {
    id: "w4_023",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 24 (Case 3 — Mobile Game During Online Lecture)",
      ru: "W4 · Слайд 24 (Кейс 3 — Мобильная игра на онлайн-лекции)",
    },
    q: {
      en: "In Case 3 (Slide 24), a student plays a mobile game while listening to an online lecture, misses the lecturer's announcement of a changed assignment submission date, and submits the work late. What barrier is this?",
      ru: "В Кейсе 3 (Слайд 24) студент играет в мобильную игру во время онлайн-лекции, пропускает объявление преподавателя об изменении даты сдачи задания и сдает работу с опозданием. Какой это барьер?",
    },
    options: [
      {
        en: "Cognitive load & digital distraction (constant multitasking and unrelated apps causing fragmented attention and missed details)",
        ru: "Когнитивный барьер и цифровое отвлечение (многозадачность и посторонние приложения, приводящие к фрагментации внимания и пропуску важных деталей)",
      },
      {
        en: "Submarine cable cut in the Klang Valley",
        ru: "Повреждение подводного интернет-кабеля",
      },
      {
        en: "High-context cultural silence",
        ru: "Высококонтекстное культурное молчание",
      },
      {
        en: "Excessively formal email etiquette",
        ru: "Слишком официальный тон электронного письма",
      },
    ],
    correct: 0,
    explanation: {
      en: "Case 3 demonstrates digital distraction and multitasking (Slide 9 & 13: 'Unrelated apps' and 'Constant multitasking' reduce attention to 40%, causing missed details and lower-quality outcomes).",
      ru: "Кейс 3 иллюстрирует цифровое отвлечение и попытку многозадачности (Слайды 9 и 13), из-за чего падает концентрация и теряется важный контекст.",
    },
  },
  {
    id: "w4_024",
    topic: "W4",
    sourceType: "slides",
    sourceRef: {
      en: "W4 · Slide 25 (Case 4 — 'slides are fire! Can you drop them ASAP?')",
      ru: "W4 · Слайд 25 (Кейс 4 — «slides are fire! Can you drop them ASAP?»)",
    },
    q: {
      en: "In Case 4 (Slide 25), a student texts their lecturer: “Hey, the slides are fire! Can you drop them ASAP?” The lecturer finds it too informal and is unsure whether the student is making a request or complaining. Which barriers and rules were violated?",
      ru: "В Кейсе 4 (Слайд 25) студент пишет преподавателю: «Hey, the slides are fire! Can you drop them ASAP?». Преподаватель считает сообщение слишком неформальным и не понимает, просьба это или жалоба. Какие барьеры возникли и какие правила нарушены?",
    },
    options: [
      {
        en: "Language gap (slang/idioms 'fire', 'drop') + inappropriate informal tone (violating THINK and CLEAR/POLITE checks) — should be rewritten in plain, polite, professional language",
        ru: "Языковой барьер (сленг «fire», «drop») и неуместный панибратский тон (нарушение THINK и проверок CLEAR/POLITE) — нужно переписать вежливо и без сленга",
      },
      {
        en: "Technical glitch — the student's Wi-Fi disconnected mid-sentence",
        ru: "Технический барьер — у студента оборвался Wi-Fi на середине фразы",
      },
      {
        en: "Information overload — the lecturer had 342 unread emails",
        ru: "Информационная перегрузка — у преподавателя было 342 непрочитанных письма",
      },
      {
        en: "Intrapersonal barrier — the student was talking to themselves",
        ru: "Внутриличностный барьер — студент разговаривал сам с собой",
      },
    ],
    correct: 0,
    explanation: {
      en: "Case 4 combines a Language Gap (slang 'fire' and 'drop' causing confusion about whether it's praise or a complaint) with poor Digital Etiquette (informal, demanding 'ASAP' tone to a lecturer).",
      ru: "Кейс 4 сочетает языковой барьер (сленг «fire» и «drop», из-за которого непонятно, хвалит студент слайды или жалуется) и нарушение цифрового этикета (неуважительное «Hey» и требовательное «ASAP»).",
    },
  },
];
