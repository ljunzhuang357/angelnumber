export interface AngelEntry {
  badge: string;
  title: string;
  body: string;
  love: string;
  career: string;
  spiritual: string;
  guidance: string;
}

// ─── Hand-crafted popular entries ───
const POPULAR: Record<string, AngelEntry> = {
  "000": {badge:"Source Energy",title:"New Cycle",body:"Zero is the void where all creation begins. Seeing 000 means you're at a clean starting point — the slate is wiped, and infinite potential surrounds you. The universe is inviting you to create from scratch.",love:"Old relationship patterns have cleared. You're entering a new chapter with fresh eyes.",career:"A blank canvas professionally. Don't be afraid to start something entirely new from zero.",spiritual:"You are one with the source. This is a powerful moment for meditation and intention-setting.",guidance:"You are at the beginning of everything. What will you create?"},
  "111": {badge:"Master Number",title:"Manifestation",body:"Your thoughts are becoming reality. Focus on what you want, not what you fear. The universe is listening to every thought you have right now.",love:"Your positive mindset is attracting the right partner or deepening your current bond. Stay optimistic.",career:"Your ideas have power now. Take action on that project you've been thinking about.",spiritual:"Your connection to the universe is strong. Trust the signs you're receiving.",guidance:"Keep your thoughts high and your faith higher. You are a creator."},
  "222": {badge:"Balance",title:"Trust the Process",body:"Balance, harmony, and trust. Things are aligning behind the scenes even if you can't see it yet. Keep the faith.",love:"Relationships need patience right now. Trust that things are working out for the highest good.",career:"Collaboration is key. Your partnerships and teamwork will bring the results you're after.",spiritual:"Your angels are reminding you that you're not alone. Stay open to receiving help.",guidance:"Trust the timing. Not everything needs to be figured out today."},
  "333": {badge:"Ascended Masters",title:"Creativity & Growth",body:"The ascended masters are near. Your creativity is amplified. Express yourself, create something, and step into your growth.",love:"Bring your authentic self to your relationships. Vulnerability creates deeper bonds.",career:"This is a time of expansion. Say yes to opportunities that challenge you to grow.",spiritual:"Your guides are supporting your spiritual growth. Keep learning and exploring.",guidance:"Don't hide your light. The world needs what only you can create."},
  "444": {badge:"Protection",title:"You Are Safe",body:"You are surrounded by love, protection, and support. The universe has your back completely. Keep moving forward with confidence.",love:"You are safe to be yourself in your relationships. Trust that you are loved exactly as you are.",career:"Your foundation is solid. Keep building — your hard work is being noticed and supported.",spiritual:"Your spirit guides are close. They're watching over you every step of the way.",guidance:"Fear is a liar. You are protected. Keep going."},
  "555": {badge:"Transformation",title:"Embrace Change",body:"Major change is coming. Don't resist it — this transformation is exactly what you need to grow into your next level.",love:"A relationship shift is coming. It may feel uncomfortable, but it's making space for something better.",career:"Big changes are on the horizon at work. Stay flexible and trust the process.",spiritual:"Your soul is calling for growth. Let go of what no longer serves you.",guidance:"Change is the universe's way of upgrading your life. Say yes to it."},
  "666": {badge:"Realignment",title:"Refocus Your Energy",body:"This number is not negative. It's a gentle nudge to bring your thoughts and energy back into alignment with what truly matters.",love:"Shift your focus from what's wrong to what's working. Your attention shapes your reality.",career:"Reassess your priorities. Are you spending energy on things that truly matter?",spiritual:"Your spiritual practice needs attention. Carve out time for stillness.",guidance:"You've drifted off course. The compass is in your hands."},
  "777": {badge:"Lucky",title:"Spiritual Awakening",body:"You are on the right path. This is a deeply spiritual time. Trust your intuition completely and keep moving forward with confidence.",love:"Your intuition about your relationship is spot-on. Trust what your gut is telling you.",career:"You're being guided toward your true purpose. Follow the signs, even if they don't make logical sense yet.",spiritual:"You're experiencing a spiritual breakthrough. This is a powerful time for growth.",guidance:"You are exactly where you need to be. The universe is cheering you on."},
  "888": {badge:"Abundance",title:"Prosperity Is Coming",body:"Abundance is flowing toward you — financial, spiritual, or both. You are being rewarded for your hard work and integrity.",love:"Your relationships are entering a phase of mutual growth and abundance. Give and receive freely.",career:"Financial and professional rewards are on the way. Keep doing the right thing.",spiritual:"Your spiritual bank account is full. Share your abundance with others.",guidance:"You reap what you sow. And you've been sowing well."},
  "999": {badge:"Completion",title:"A Chapter Ends",body:"An important cycle is closing in your life. Let go with gratitude — what's ending is making space for something more aligned with who you're becoming.",love:"A relationship chapter is completing. Release what no longer serves your growth, with love and respect.",career:"A professional phase is wrapping up. Celebrate what you've built, then turn the page.",spiritual:"You're completing a major soul cycle. Your growth has been profound.",guidance:"Endings are not failures. They are doors closing so better ones can open."},

  "11": {badge:"Intuition",title:"Heightened Awareness",body:"11 is a master number of intuition and spiritual insight. Your inner knowing is sharper than usual — pay attention to gut feelings and sudden flashes of clarity.",love:"Trust your instincts about your relationship. What your gut is telling you is likely accurate.",career:"A moment of professional clarity is here. Act on the insight you've just received.",spiritual:"Your spiritual perception is heightened. Meditate on what you're sensing.",guidance:"You know more than you think. Trust yourself."},
  "22": {badge:"Master Builder",title:"Dreams Into Reality",body:"22 carries the power to turn visions into tangible results. You have the discipline and vision to build something lasting. Keep laying bricks.",love:"Build your relationship with intention and care. Long-term love is constructed, not found.",career:"You have the power to build something significant. Stay focused on the foundation.",spiritual:"Your spiritual practice is becoming the foundation of your life. Keep building.",guidance:"Dream big, then do the work. You have what it takes to build it."},
  "33": {badge:"Master Teacher",title:"Compassion & Healing",body:"33 is the energy of compassion, healing, and uplifting others. Your presence is healing to those around you. Share your light generously.",love:"Your relationships are a vehicle for healing — both yours and theirs. Lead with compassion.",career:"Your work has a healing impact on others. This is your time to teach and inspire.",spiritual:"You are called to share your spiritual wisdom. Teaching others deepens your own understanding.",guidance:"The world needs your compassion. Don't hold back."},
  "44": {badge:"Stability",title:"Strong Foundation",body:"44 represents solid foundations and unwavering stability. The structure you've been building is strong enough to support your next level. Trust the ground beneath you.",love:"Your relationship foundation is solid. Keep investing in the basics that hold you together.",career:"Your professional foundation is strong. Now build on it with confidence.",spiritual:"Ground yourself in your spiritual practice. The roots are deep enough to support growth.",guidance:"You're standing on solid ground. Don't be afraid to reach higher."},
  "55": {badge:"Freedom",title:"Major Change Ahead",body:"55 signals significant life changes that will bring personal freedom. Embrace the unknown — transformation is the gateway to a more authentic life.",love:"A relationship shift is coming that will liberate both of you. Trust the process.",career:"Professional change is bringing you more autonomy. Say yes to the unfamiliar.",spiritual:"Your soul is calling for liberation. Release old beliefs that keep you small.",guidance:"Freedom is on the other side of change. Keep walking toward it."},

  "1010": {badge:"Divine Timing",title:"Keep Going",body:"You're receiving a clear sign that you're on the right path and your spiritual growth is accelerating. The universe is confirming your direction — keep moving forward with confidence and purpose.",love:"A relationship is evolving to a deeper level. Trust the pace it's unfolding at.",career:"Your professional path is being illuminated. Keep doing the work — breakthroughs are near.",spiritual:"Your spiritual awakening is accelerating. Synchronicities will become more frequent.",guidance:"You're not behind. You're not ahead. You're exactly on time."},
  "1111": {badge:"Awakening",title:"Portal Is Open",body:"This is a powerful wake-up call. Your thoughts are manifesting at lightning speed. Stay aware of what you're thinking and feeling right now.",love:"A soulmate connection or significant relationship milestone is near. Stay open to receiving love.",career:"This is a time of new beginnings professionally. A door is opening. Walk through it.",spiritual:"Your spiritual awakening is accelerating. Pay attention to synchronicities.",guidance:"You are at a portal of new beginnings. Step through with intention."},
  "1212": {badge:"Alignment",title:"You're on Track",body:"You are in perfect alignment with your life's purpose. Keep going. Everything you've been working toward is falling into place.",love:"Your relationships are in harmony. Continue nurturing what you've built together.",career:"Things are clicking into place professionally. Your persistence is paying off.",spiritual:"You are living in alignment with your soul's mission. This is exactly where you're meant to be.",guidance:"Trust the path. You're not lost — you're exactly on track."},
  "1221": {badge:"Forward Motion",title:"Keep Moving",body:"The universe is telling you to maintain your momentum. You've come too far to stop now. Keep putting one foot in front of the other — progress is being made even when it doesn't feel like it.",love:"A relationship is moving toward greater balance. Trust the forward direction, even if it's slow.",career:"Your efforts are compounding. Don't stop now — the breakthrough is closer than it seems.",spiritual:"You're shedding old beliefs and gaining new spiritual clarity. Keep going.",guidance:"Forward is the only direction. Even slow progress is still progress."},
  "1234": {badge:"Progression",title:"One Step at a Time",body:"Life unfolds in steps, not leaps. 1234 is a reminder that you don't need to have it all figured out — you just need to take the next right step. Things are progressing naturally in the right order.",love:"Relationships grow step by step. Don't rush or force — let the connection develop at its natural pace.",career:"Your career is progressing in the right sequence. Trust that each step builds on the last.",spiritual:"Your spiritual growth follows its own natural order. Don't compare your journey to others'.",guidance:"You don't need to see the whole staircase. Just take the next step."},
  "1313": {badge:"Transition",title:"Growth Through Change",body:"Change is here and it's pushing you to grow. 1313 carries the energy of evolution through disruption. Instead of resisting, ask yourself: what is this change making room for?",love:"Your relationship is being challenged to evolve. Don't cling to old dynamics — growth can be uncomfortable but beautiful.",career:"Professional transformation is underway. Embrace the unfamiliar — that's where your next level lives.",spiritual:"Your spiritual path is deepening through experience, not theory. Let life be your teacher.",guidance:"Growth hurts sometimes. That's how you know it's working."},
  "1414": {badge:"Angelic Guidance",title:"You're Not Alone",body:"Your angels and guides are very close right now. 1414 is a reassuring sign that divine support is surrounding you. You are being guided, protected, and gently nudged in the right direction.",love:"Your relationship is being guided from the spiritual realm. Pay attention to intuitive nudges about your partner.",career:"You're being divinely guided in your work. Follow the opportunities that feel aligned.",spiritual:"Your connection to your guides is stronger than ever. Ask for a sign, then pay attention.",guidance:"You are not walking this path alone. Help is always available — you just have to ask."},
  "1515": {badge:"Transformation",title:"Embrace the Shift",body:"A significant life change is approaching — and it's exactly what you need. 1515 carries the energy of purposeful transformation. Don't cling to the familiar. What's coming is better.",love:"A relationship shift is imminent. Trust that the change is creating space for deeper connection.",career:"A major professional change is on the horizon. Stay open — it may look different than you expected.",spiritual:"Your soul is calling you to evolve. The discomfort you feel is the growing pains of expansion.",guidance:"When the universe shakes things up, it's because you're ready for more."},
  "1616": {badge:"Positivity",title:"Mindset Matters",body:"Your thoughts and beliefs are shaping your reality more than ever. 1616 is a reminder to maintain a positive mindset. What you focus on grows — so focus on what you want, not what you fear.",love:"Your relationship mirrors your thoughts about it. Shift your perspective and watch the dynamic transform.",career:"Your professional mindset is key right now. Believe in your success before you see it.",spiritual:"Your spiritual practice is raising your vibration. Stay consistent — the results will follow.",guidance:"What you think, you create. Choose your thoughts wisely."},
  "1717": {badge:"Victory",title:"Good Fortune",body:"You are on a winning streak spiritually and materially. 1717 is a sign of victory, good luck, and alignment. Keep doing what you're doing — the universe is rewarding your positive mindset and actions.",love:"Your relationship is entering a fortunate phase. Expect good news, deeper connection, or a happy surprise.",career:"Success is coming your way. Recognition, rewards, or a breakthrough opportunity is near.",spiritual:"Your spiritual practice is bearing fruit. You're experiencing the rewards of inner work.",guidance:"You've earned this. Accept the good coming your way without guilt."},
  "1818": {badge:"Abundance",title:"Wealth & Flow",body:"Abundance is flowing into your life on all levels. 1818 is a powerful prosperity sign — financial, emotional, and spiritual wealth are aligning. You are being rewarded for your integrity and hard work.",love:"Your relationship is growing in mutual abundance. Give freely, receive openly.",career:"Financial and professional rewards are on their way. Your consistent effort is paying off.",spiritual:"Your spiritual cup is overflowing. Share your wisdom and blessings with others.",guidance:"Abundance is your birthright. Open your arms to receive what's coming."},
  "1919": {badge:"New Beginnings",title:"Fresh Start",body:"One chapter is closing and another is beginning. 1919 carries the energy of completion followed by renewal. Release the past with gratitude — something new and exciting is ready to enter your life.",love:"A relationship cycle is ending to make way for one that better serves your growth. Trust the timing.",career:"A new professional chapter is beginning. Fresh opportunities, projects, or roles are on the horizon.",spiritual:"You're completing a major spiritual cycle. Celebrate how far you've come.",guidance:"Let go of what's finished. The new chapter is already written — you just need to turn the page."},
  "2020": {badge:"Inner Knowing",title:"Trust Yourself",body:"You are being called to trust your inner wisdom above all else. 2020 is a sign of spiritual clarity and heightened intuition. The answers you seek are not outside of you — they're already within.",love:"Trust your instincts about your relationship. Your inner knowing is more accurate than any outside advice.",career:"You already know the right professional move. Stop second-guessing yourself and act.",spiritual:"Your inner vision is clear. Meditate on what you truly want — the answer is already there.",guidance:"You have everything you need inside you. Trust your own voice."},
  "2121": {badge:"Optimism",title:"Bright Future",body:"The universe is showing you a glimpse of a bright future. 2121 is a message of hope, progress, and forward momentum. Keep your eyes on the horizon — good things are on their way to you.",love:"Your relationship future looks bright. Keep nurturing it with optimism and open communication.",career:"Positive professional developments are coming. Keep your energy high and your vision clear.",spiritual:"Your spiritual path is unfolding beautifully. Trust that you're heading in the right direction.",guidance:"Look forward with hope. The best is still ahead of you."},
  "2222": {badge:"Harmony",title:"Amplified Balance",body:"2222 amplifies the energy of 222 — you are surrounded by harmony, balance, and divine order. Everything is working together for your highest good, even when you can't see the full picture yet.",love:"Harmony is being restored in your relationships. Trust that balance is returning.",career:"Your professional life is finding equilibrium. Keep cooperating and building partnerships.",spiritual:"You are in a state of spiritual balance. Maintain your practices and stay centered.",guidance:"Everything is unfolding exactly as it should. Trust the process completely."},
  "3333": {badge:"Creative Power",title:"Amplified Creation",body:"3333 is a powerhouse of creative and spiritual energy. The ascended masters are standing with you, amplifying your abilities. This is a time of inspired action — channel this energy into something real.",love:"Your relationships are a canvas for creative expression. Bring your full, authentic self to those you love.",career:"Your creative and professional powers are peaking. Take bold action on your biggest ideas.",spiritual:"The masters are working through you. Create something that reflects your spiritual growth.",guidance:"You have access to higher creative power right now. Don't waste it."},
  "4444": {badge:"Deep Protection",title:"Fully Supported",body:"4444 is an intensified message of angelic protection. You are surrounded on all sides by divine love and support. There is nothing to fear. Keep going with confidence — you are completely safe.",love:"Your relationship is deeply protected. Trust that any challenges are strengthening your bond.",career:"You are fully supported in your professional path. Obstacles are temporary.",spiritual:"Your angels are surrounding you with a shield of light. You are safe to grow and become.",guidance:"You are held. You are supported. You are safe. Nothing can harm you."},
  "1122": {badge:"Faith",title:"Trust the Path",body:"1122 combines the manifestation energy of 111 with the balance of 222. Your faith is being tested so it can be strengthened. Stay grounded in what you know to be true, even when the path isn't clear.",love:"Have faith in your relationship journey. What's unclear now will make sense soon.",career:"Keep faith in your professional direction. The results will come if you don't give up.",spiritual:"Your spiritual path requires patience and faith. The answers are coming.",guidance:"Faith is the bridge between where you are and where you're going."},
  "911": {badge:"Wake-Up Call",title:"Pay Attention",body:"911 is a powerful wake-up call from the universe. Something important is demanding your attention — a situation, a person, or a truth you've been avoiding. Listen. The message won't wait forever.",love:"Something in your relationship needs your honest attention. Don't look away from what's true.",career:"A critical professional signal is here. Pay attention — ignoring it could cost you.",spiritual:"This is a spiritual alarm clock. Wake up to what your soul has been trying to tell you.",guidance:"This is your moment of clarity. Don't hit snooze."},
};

// ─── Less popular but still valid entries (brief) ───
const EXTRA: Record<string, AngelEntry> = {
  "0000": {badge:"Infinite Potential",title:"Boundless Source",body:"0000 amplifies the energy of 000. You are connected to the infinite source of all creation. Anything is possible right now. The universe is pure potential waiting for you to shape it.",love:"Your relationship has infinite room to grow. Don't limit what's possible between you.",career:"Professional possibilities are endless. Think bigger than you've been thinking.",spiritual:"You are touching the infinite. This is a deeply sacred moment.",guidance:"There are no limits except the ones you believe in."},
  "5555": {badge:"Major Transformation",title:"Pivotal Shift",body:"5555 amplifies the transformative energy of 555. A major life pivot is underway — one that will redefine your direction. Trust the upheaval. It's clearing the path for your next chapter.",love:"A profound relationship transformation is happening. Let go of how it looked before.",career:"A career-defining change is approaching. Embrace it fully.",spiritual:"Your soul is undergoing a deep transformation. Surrender to the process.",guidance:"This is not a small change. This is a rewrite."},
  "6666": {badge:"Deep Realignment",title:"Total Refocus",body:"6666 calls for a complete realignment of your priorities. Not a small adjustment — a fundamental shift in where you place your energy. Rebuild your foundation from the ground up.",love:"Your relationship needs a full reset. Go back to basics and rebuild from there.",career:"It's time to fundamentally reassess your professional priorities. What truly matters?",spiritual:"A deep spiritual realignment is underway. Let go of practices that no longer serve you.",guidance:"When everything feels off, that's how you know realignment is needed."},
  "7777": {badge:"Divine Luck",title:"Blessed Path",body:"7777 carries amplified divine luck and spiritual blessing. You are deeply aligned with your highest path. Miracles are not just possible — they're flowing toward you. Stay open and grateful.",love:"Your relationship is blessed. Expect moments of grace and unexpected connection.",career:"Fortune is favoring you professionally. Trust that things are working in your favor.",spiritual:"You are walking a blessed spiritual path. Express gratitude for how far you've come.",guidance:"You are lucky — and you've earned it. Receive the blessings."},
  "8888": {badge:"Infinite Abundance",title:"Prosperity Flow",body:"8888 amplifies prosperity to its highest level. Financial, spiritual, and emotional abundance are flowing to you from all directions. You are in a peak cycle of receiving. Be generous with what flows in.",love:"Your relationship is entering a phase of deep mutual prosperity. Give and receive freely.",career:"Peak professional abundance is here. Your rewards are matching your efforts.",spiritual:"Your spiritual abundance overflows. You have so much to share with the world.",guidance:"Abundance isn't coming — it's already here. Open your arms to receive it."},
  "9999": {badge:"Highest Completion",title:"Sacred Closure",body:"9999 is the rarest angel number, carrying the energy of sacred completion. A major life cycle spanning years is reaching its culmination. Honor what has been completed — it was a vital part of your journey.",love:"A significant relationship chapter is reaching its sacred close. Honor it fully.",career:"A long professional cycle is completing. The experience you've gained is invaluable.",spiritual:"You are completing a major soul contract. The growth has been immeasurable.",guidance:"The rarest numbers mark the rarest moments. This is one of them. Feel the gravity."},
};

// ─── Deterministic variant selector ───
function variantIndex(v: string, count: number): number {
  let h = 0;
  for (let i = 0; i < v.length; i++) h = ((h << 5) - h + v.charCodeAt(i)) | 0;
  return (Math.abs(h) + v.length) % count;
}

// ─── Digit theme data ───
interface ThemeData { n: string; pos: string; neg: string; theme: string }
const CORE_WORDS: Record<string, ThemeData> = {
  "1": {n:"one",pos:"leadership and initiative",neg:"impatience",theme:"new beginnings"},
  "2": {n:"two",pos:"cooperation and balance",neg:"indecision",theme:"partnerships"},
  "3": {n:"three",pos:"creativity and communication",neg:"scattered energy",theme:"self-expression"},
  "4": {n:"four",pos:"stability and discipline",neg:"rigidity",theme:"foundation"},
  "5": {n:"five",pos:"freedom and adaptability",neg:"restlessness",theme:"change"},
  "6": {n:"six",pos:"responsibility and care",neg:"over-giving",theme:"home and service"},
  "7": {n:"seven",pos:"wisdom and intuition",neg:"isolation",theme:"spiritual growth"},
  "8": {n:"eight",pos:"abundance and power",neg:"material obsession",theme:"prosperity"},
  "9": {n:"nine",pos:"completion and compassion",neg:"attachment",theme:"endings"},
  "0": {n:"zero",pos:"infinite potential",neg:"feeling stuck",theme:"the void and new cycles"},
};

function getTheme(d: string): ThemeData {
  return CORE_WORDS[d] || {n:d,pos:"growth and evolution",neg:"resistance to change",theme:"balance"};
}

// ─── Mirror 3 (ABA): 8 variants ───
const VARIANTS_M3: ((a: ThemeData, v: string) => AngelEntry)[] = [
  // 1. Conversation between two energies
  (a, v) => ({
    badge:"Reflection", title:`${v} — The Mirror of ${a.n}`,
    body:`${v} is a mirror number, and mirrors are conversations. The energy of ${a.n} — ${a.theme} — appears at both ends of this number, wrapping around the center like a question folding into its answer. On one side you see what you've been putting out. On the other, you see what the world is reflecting back. The universe isn't showing you something new — it's showing you yourself.`,
    love:`Your relationships are reflecting back who you are, not who you wish you were. Pay attention to what keeps showing up.`,
    career:`The same professional patterns keep circling back. Break the loop by changing your approach, not your circumstances.`,
    spiritual:`You are a mirror of the divine. What you see in the universe is what the universe sees in you.`,
    guidance:`Stop looking for answers outside yourself. The reflection is the message.`,
  }),
  // 2. Call and response
  (a, v) => ({
    badge:"Reflection", title:`${v} — Call & Response`,
    body:`${v} is a call and response between you and the universe. You sent out an energy — ${a.theme} — and ${v} is the reply. The number opens and closes with the same digit because your message has been received and answered. The question now is: are you listening to the reply, or still repeating the same call?`,
    love:`The universe is answering what you've been asking for in love. Notice the synchronicities around your relationships right now.`,
    career:`A professional signal you sent out is coming back to you. The response may arrive in an unexpected form.`,
    spiritual:`Your prayers are being answered — not in words, but in patterns. Learn to read the language of numbers.`,
    guidance:`You called. The universe answered. Now pay attention.`,
  }),
  // 3. Echo
  (a, v) => ({
    badge:"Reflection", title:`${v} — Echo of ${a.n}`,
    body:`${v} echoes like a sound bouncing off a canyon wall. The energy of ${a.theme} is hitting you from both directions — the beginning and the end of this number are the same. When you see ${v}, it means the same message has been sent to you multiple times because you didn't fully hear it the first time. This is not punishment. This is insistence.`,
    love:`A relationship truth keeps repeating itself because you haven't fully received it. Listen this time.`,
    career:`The same career lesson is circling back. Next time it may come louder.`,
    spiritual:`Repeated messages are a sign your spirit guides are being patient with you. Don't test their patience.`,
    guidance:`Hear it the first time. The echo is a second chance, not a third.`,
  }),
  // 4. Steady current
  (a, v) => ({
    badge:"Reflection", title:`${v} — The Current`,
    body:`${v} flows like a river between two banks — the same force at both ends, pressing inward. The energy of ${a.theme} is creating a current in your life right now, and ${v} says: don't fight the current. You are being carried somewhere specific. The repetition in this number is the rhythm of the water — steady, persistent, and sure of where it's going.`,
    love:`Let your relationship flow naturally. Forcing outcomes creates resistance. Trust the current.`,
    career:`A steady professional path is unfolding. You don't need to swim harder — just stay in the flow.`,
    spiritual:`Your spiritual current is strong. Go with it rather than questioning every bend in the river.`,
    guidance:`Stop paddling against the current. Let the river take you.`,
  }),
  // 5. Question and answer
  (a, v) => ({
    badge:"Reflection", title:`${v} — Question / Answer`,
    body:`${v} is a question and answer in one number. The first digit asks: are you embracing ${a.theme}? The last digit answers: you already know the answer. Mirror numbers reveal that your deepest questions already live inside you. ${v} isn't giving you new information — it's confirming what you already know but haven't trusted yet.`,
    love:`You already know what your heart wants. The question isn't "what should I do?" — it's "why haven't I done it yet?"`,
    career:`Stop looking for permission to take the next step. You already have the answer. Now act on it.`,
    spiritual:`Your spirit doesn't ask questions — it knows. The asking is your mind catching up to what your soul already understands.`,
    guidance:`You wouldn't ask the question if you didn't already suspect the answer.`,
  }),
  // 6. The bridge
  (a, v) => ({
    badge:"Reflection", title:`${v} — The Bridge`,
    body:`${v} is a bridge between the same two points. The digit ${v[0]} appears, something happens in the middle, and then ${v[0]} appears again — different because of what happened between. This number represents transformation within the same theme. You are not leaving ${a.theme} behind. You are going through it and coming out the other side changed by the journey.`,
    love:`A relationship challenge is actually a transformation in disguise. Go through it, not around it.`,
    career:`Professional growth isn't about changing fields — it's about changing within your field. Stay and grow through.`,
    spiritual:`You don't need to abandon your spiritual path. You need to go deeper into it.`,
    guidance:`The bridge doesn't take you somewhere else. It takes you deeper into where you already are.`,
  }),
  // 7. Balance point
  (a, v) => ({
    badge:"Reflection", title:`${v} — The Balance Point`,
    body:`${v} is a seesaw perfectly balanced — the same weight on both ends, centered around a middle. Both sides of this number carry the energy of ${a.theme}, but the middle is where the actual work happens. Your life right now is not about the extremes; it's about finding the center point where everything stabilizes. ${v} says: stop leaning. Stand upright.`,
    love:`Find the middle ground in your relationship. Neither extreme serves you — the sweet spot is in between.`,
    career:`Balance in your career isn't compromise; it's strategy. The middle path often yields the most sustainable results.`,
    spiritual:`A balanced spirit is neither ascetic nor indulgent. Find the center of your spiritual practice and hold it steady.`,
    guidance:`Balance isn't static — it's a constant, gentle correction. Stay centered.`,
  }),
  // 8. Two sides
  (a, v) => ({
    badge:"Reflection", title:`${v} — Two Sides`,
    body:`${v} has two identical ends and a hidden middle. The outer digits show what the world sees — ${a.theme} made visible. But the center of this mirror is the part that isn't reflected back to you: the part only you can see within yourself. ${v} asks you to reconcile the person others see with the person you know yourself to be. The reflection is true — but it's not the whole picture.`,
    love:`What others see in your relationship matters less than what you know to be true. Trust your inside perspective.`,
    career:`Your public reputation is only one version of your professional story. Don't lose sight of the other.`,
    spiritual:`The version of you that meditates and the version of you that loses your temper are both real. Integration is the goal.`,
    guidance:`Both sides of you are valid. The mirror can only show one at a time.`,
  }),
];

// ─── Mirror 4 (ABBA): 8 variants ───
const VARIANTS_M4: ((a: ThemeData, b: ThemeData, v: string) => AngelEntry)[] = [
  // 1. The embrace
  (a, b, v) => ({
    badge:"Balanced Reflection", title:`${v} — The Embrace`,
    body:`${v} is shaped like an embrace — outer digit ${v[0]} (${a.theme}) wraps around inner digit ${v[1]} (${b.theme}). The number says: let ${a.theme} support ${b.theme}, and let ${b.theme} complete ${a.theme}. In an embrace, both sides hold and are held. You are being asked to bring these two energies together without forcing either one to dominate.`,
    love:`Let your relationship embrace both independence and connection. One doesn't cancel the other — they complete each other.`,
    career:`Let ${a.theme} and ${b.theme} work together in your career. One opens doors, the other builds the room.`,
    spiritual:`Spiritual embrace means holding all parts of yourself — the light and the learning curve — with equal compassion.`,
    guidance:`Stop keeping these two parts of your life separate. They're meant to work together.`,
  }),
  // 2. The completed circle
  (a, b, v) => ({
    badge:"Balanced Reflection", title:`${v} — Completed Circle`,
    body:`${v} traces a full circle: start at ${v[0]} (${a.theme}), move through ${v[1]} (${b.theme}), reflect back through ${v[1]}, and return to ${v[0]}. The journey from ${v[0]} to ${v[0]} looks like you're back where you started — but you're not. The middle two digits are the growth that happened between. You completed a cycle, and the wisdom gained is in the middle.`,
    love:`A relationship cycle is completing. You're back where you started, but wiser for what passed between.`,
    career:`A professional chapter has come full circle. The experience in between was the real reward.`,
    spiritual:`Completion is not regression. Coming back to the same truth with deeper understanding is spiritual progress.`,
    guidance:`You returned to where you began, but you're not the same person who started the journey.`,
  }),
  // 3. The frame
  (a, b, v) => ({
    badge:"Balanced Reflection", title:`${v} — The Frame`,
    body:`${v} is a frame: ${v[0]} (${a.theme}) and ${v[3]} (${a.theme}) form the outer edges, holding ${v[1]} (${b.theme}) and ${v[2]} (${b.theme}) in the center. The frame defines what's inside — it gives shape to the inner energy without overpowering it. ${a.theme} creates the container; ${b.theme} fills it. Both are necessary for the picture to exist at all.`,
    love:`Create a supportive framework in your relationship — boundaries that hold, not walls that confine.`,
    career:`Structure enables creativity. Don't resist the systems that support your professional growth.`,
    spiritual:`A spiritual framework gives your practice shape and stability. Freedom without form becomes chaos.`,
    guidance:`The frame doesn't trap what's inside — it makes it visible.`,
  }),
  // 4. Wave pattern
  (a, b, v) => ({
    badge:"Balanced Reflection", title:`${v} — The Wave`,
    body:`${v} moves like a wave: from ${v[0]} (${a.theme}) to ${v[1]} (${b.theme}) and back, then forward again. This is not a static reflection — it's an oscillation. The energy of ${a.theme} rises, softens into ${b.theme}, then returns. ${v} says your life right now is rhythmic, not linear. There is no permanent state — only flow between two shores.`,
    love:`Relationships have natural rhythms — closeness and space, giving and receiving. Trust the wave, don't fight it.`,
    career:`Your professional energy will have peaks and valleys. Work with the rhythm, not against it.`,
    spiritual:`Spiritual life is tidal. Some days you feel connected; some days you don't. Both are part of the same ocean.`,
    guidance:`You don't need to be at the peak all the time. The valley is not failure — it's the other half of the wave.`,
  }),
  // 5. Mirror and window
  (a, b, v) => ({
    badge:"Balanced Reflection", title:`${v} — Mirror & Window`,
    body:`${v} is two things at once: a mirror between the outer pair (${v[0]} and ${v[3]}) and a window between the inner pair (${v[1]} and ${v[2]}). The outer ${v[0]}'s reflect your relationship with ${a.theme}, while the inner ${v[1]}'s open a view into ${b.theme}. ${v} asks you to look at yourself (mirror) and beyond yourself (window) at the same time.`,
    love:`Look honestly at yourself in your relationship (mirror), then look at your partner with fresh eyes (window).`,
    career:`Balance self-assessment with outward vision. Know your strengths, but also see the opportunities beyond you.`,
    spiritual:`Self-knowledge and transcendence are two sides of the same spiritual practice. You need both.`,
    guidance:`Look in, then look out. Don't get stuck doing only one.`,
  }),
  // 6. Anchor and sail
  (a, b, v) => ({
    badge:"Balanced Reflection", title:`${v} — Anchor & Sail`,
    body:`${v} pairs the energy of ${v[0]} (${a.theme}) with ${v[1]} (${b.theme}) — and then repeats it, doubled for emphasis. This is a number of dynamic balance, like an anchor holding a sail in place. The anchor (${a.theme}) gives you stability; the sail (${b.theme}) moves you forward. You need both — without the anchor, you drift. Without the sail, you stay still. ${v} is asking you to set sail without cutting the rope.`,
    love:`A healthy relationship needs both security and growth. One partner may provide anchor, the other sail — but both are essential.`,
    career:`Your career needs both roots and wings. Stability funds exploration. Safety enables risk.`,
    spiritual:`A grounded spiritual practice gives you the courage to explore unknown territory. Rootedness enables flight.`,
    guidance:`Anchor yourself in what you know, then sail into what you don't. Neither works without the other.`,
  }),
  // 7. Bookend
  (a, b, v) => ({
    badge:"Balanced Reflection", title:`${v} — The Bookends`,
    body:`${v} is like two bookends holding a set of books — the outer ${v[0]}'s (${a.theme}) bracket the inner ${v[1]}'s (${b.theme}). What's between them is the content that matters. The bookends don't compete with the books; they give them structure. ${v} says: let ${a.theme} provide the container, and let ${b.theme} be the substance. Both are needed to complete the shelf.`,
    love:`Structure in relationships isn't restrictive — it's supportive. Healthy boundaries create space for connection to grow.`,
    career:`Your professional foundation (${a.theme}) is not the whole picture — it's what enables the real work (${b.theme}) to happen.`,
    spiritual:`Spiritual discipline is the structure, not the goal. The goal is what the structure makes possible.`,
    guidance:`What holds everything in place is just as important as the things being held. Honor both.`,
  }),
  // 8. Quiet understanding
  (a, b, v) => ({
    badge:"Balanced Reflection", title:`${v} — Quiet Understanding`,
    body:`${v} speaks in quiet symmetry. There is no drama here — just the calm knowing that ${a.theme} and ${b.theme} belong together. The number resolves itself: outer digits agree, inner digits agree. Everything is in its place. ${v} appears when you're in a moment of unspoken alignment — when things make sense even though nothing has been said. Trust the quiet.`,
    love:`Greater understanding is available without words. Pay attention to what's unspoken between you.`,
    career:`Sometimes the best professional move is to trust what you know without over-analyzing. Silent confidence speaks volumes.`,
    spiritual:`Deep spiritual understanding doesn't need to be articulated. Sit in the knowing without needing to explain it.`,
    guidance:`Not everything needs to be said out loud. The deepest truths are felt, not spoken.`,
  }),
];

// ─── AABB: 8 variants ───
const VARIANTS_AABB: ((a: ThemeData, b: ThemeData, v: string) => AngelEntry)[] = [
  // 1. Emphasis
  (a, b, v) => ({
    badge:"Double Pattern", title:`${v} — Emphasized Energy`,
    body:`${v} speaks with double emphasis. The energy of ${a.n} (${a.theme}) appears twice in a row, followed by ${b.n} (${b.theme}) also doubled. This number says: what's being shown to you is not a suggestion — it's an emphasis. ${a.theme} sets the stage, then ${b.theme} completes the sentence. Two fields, one message. You're being asked to move from ${a.theme} into ${b.theme} without hesitation.`,
    love:`A relationship truth is being emphasized. Don't wait for a third sign before you act on what you're seeing.`,
    career:`Your career is sending you a doubled message. Pay attention to patterns that repeat — they're pointing the way.`,
    spiritual:`Spiritual messages that come in pairs are urgent without being alarming. Receive them with both hands.`,
    guidance:`When the universe says something twice, it expects you to act on it. Stop waiting.`,
  }),
  // 2. The door
  (a, b, v) => ({
    badge:"Double Pattern", title:`${v} — Two Rooms`,
    body:`${v} is two rooms connected by a door. The first pair (${v[0]}${v[1]}) represents ${a.theme} — the room you're currently standing in. The second pair (${v[2]}${v[3]}) represents ${b.theme} — the room you're being called toward. The doubled format says you can't stay in the first room and also experience the second. A transition is needed. ${v} is the door. Walk through it.`,
    love:`A relationship transition is in front of you. You can't stay where you are and also have what's next.`,
    career:`Your career is presenting a clear before-and-after moment. The door is open — it's on you to step through.`,
    spiritual:`Your spiritual life is asking you to move from one room to another. What you leave behind made you who you are.`,
    guidance:`You can stand in the doorway indefinitely, but that's not the same as being in the next room.`,
  }),
  // 3. Two breaths
  (a, b, v) => ({
    badge:"Double Pattern", title:`${v} — Two Breaths`,
    body:`${v} reads like two breaths: inhale (${v[0]}${v[1]} — ${a.theme}), exhale (${v[2]}${v[3]} — ${b.theme}). The doubling creates a natural rhythm of receiving and releasing, gathering and letting go. You're not meant to stay in one breath forever. ${v} teaches the cycle: receive ${a.theme}, then release into ${b.theme}. Then begin again. This is the natural rhythm of growth.`,
    love:`Breathe in connection, breathe out independence. Relationships need both cycles to stay alive.`,
    career:`Work in cycles, not marathons. Sprint, then recover. Create, then edit. The rhythm is the secret.`,
    spiritual:`Your spiritual practice, like your breath, is continuous but not constant — it has its own rhythm. Trust it.`,
    guidance:`Don't hold your breath waiting for results. Exhale, release, and trust the next inhale will come.`,
  }),
  // 4. Before and after
  (a, b, v) => ({
    badge:"Double Pattern", title:`${v} — Before & After`,
    body:`${v} is a before-and-after picture in number form. The first block (${v[0]}${v[1]}) shows what was — ${a.theme} in its concentrated form. The second block (${v[2]}${v[3]}) shows what's coming — ${b.theme} taking its place. The doubled structure says this transition is definitive. You can't undo the shift from one pair to the next. ${v} marks a permanent change in your life's composition.`,
    love:`A relationship has crossed a threshold. There's no going back to how it was — and that's okay. You're not supposed to go back.`,
    career:`A professional transition is complete or nearly complete. The "before" version of your career is behind you.`,
    spiritual:`Your spiritual evolution has reached a point of no return. You can't unknow what you now know.`,
    guidance:`Stop looking back. The "before" is closed. The "after" is already here.`,
  }),
  // 5. Double foundation
  (a, b, v) => ({
    badge:"Double Pattern", title:`${v} — Double Foundation`,
    body:`${v} builds its meaning on a foundation of repetition. The first pair doubles ${v[0]} (${a.theme}), and the second pair doubles ${v[2]} (${b.theme}). Double digits represent amplified energy — when you see them stacked like this, the message is: both ${a.theme} and ${b.theme} are being strengthened in your life right now. Not one or the other — both. The doubling is the universe's way of reinforcing the foundation under your feet.`,
    love:`Both partners' energies are being amplified in the relationship right now. That includes strengths and challenges. Choose what you feed.`,
    career:`Your professional foundation is being reinforced. The systems and skills you're building now will support you for years.`,
    spiritual:`Your spiritual foundation is deepening. What you're practicing now is becoming permanent.`,
    guidance:`The foundation is being laid twice for a reason. What's being built on top of it will need to hold weight.`,
  }),
  // 6. Preparation
  (a, b, v) => ({
    badge:"Double Pattern", title:`${v} — Preparation`,
    body:`${v} is a number of preparation. The first pair (${v[0]}${v[1]}) asks you to fully embrace ${a.theme} — to clean the slate and gather your tools. The second pair (${v[2]}${v[3]}) signals that ${b.theme} is the arena where those tools will be used. You are in the staging area, not the battlefield yet. ${v} says: use this time wisely. Prepare thoroughly. The doubling is the universe saying "are you ready yet?" under its breath.`,
    love:`Use this time to prepare yourself for the relationship phase ahead. Personal readiness creates better partnerships.`,
    career:`The preparation period is almost over. Get your materials, your strategy, and your mindset in order now.`,
    spiritual:`Your spiritual preparation has been thorough. You are nearly ready for what comes next.`,
    guidance:`The work you're doing in private will determine what happens in public. Prepare like it matters — because it does.`,
  }),
  // 7. Mirror in pairs
  (a, b, v) => ({
    badge:"Double Pattern", title:`${v} — Paired Reflection`,
    body:`${v} is a mirror viewed in pairs. The first pair mirrors itself: ${v[0]}${v[0]}, a doubling of ${a.theme}. The second pair mirrors itself: ${v[2]}${v[2]}, a doubling of ${b.theme}. Two mirrors facing each other — the reflection goes on forever. This is a number about infinite recursion. The patterns in your life that involve ${a.theme} and ${b.theme} are not surface-level. They go all the way down. Look deeper.`,
    love:`The patterns you notice in your relationships are just the surface. Go deeper into where they actually come from — you.`,
    career:`The professional challenges you face are reflections of something deeper in your approach. Address the root.`,
    spiritual:`Infinity lives in the space between two mirrors. Your spiritual growth has no ceiling and no end.`,
    guidance:`When a reflection reflects another reflection, the truth is somewhere in the infinite middle.`,
  }),
  // 8. Duality
  (a, b, v) => ({
    badge:"Double Pattern", title:`${v} — Living in Two Worlds`,
    body:`${v} lives in two worlds at once: the world of ${a.theme} (${v[0]}${v[1]}) and the world of ${b.theme} (${v[2]}${v[3]}). A person who sees ${v} is someone who belongs to both. You might feel split between responsibilities and dreams, between who you are and who you're becoming. ${v} says this duality isn't a flaw — it's the natural state of being alive. You don't have to choose. You just have to hold both.`,
    love:`You can be both independent and devoted, both practical and romantic. Your relationship doesn't need you to pick one.`,
    career:`Your career may feel like two paths pulling in opposite directions. That's not confusion — it's range.`,
    spiritual:`Spiritual duality is the tension between the human and the divine. Stop trying to resolve it — live in it.`,
    guidance:`You were never meant to be one thing. The tension between two worlds is where growth happens.`,
  }),
];

// ─── Sequence: 8 variants ───
const VARIANTS_SEQ: ((first: ThemeData, last: ThemeData, len: number, v: string) => AngelEntry)[] = [
  // 1. The staircase
  (first, last, len, v) => ({
    badge:"Progression", title:`${v} — The Staircase`,
    body:`${v} is a staircase. Each digit is one step higher than the last, climbing from ${first.theme} toward ${last.theme}. ${len} steps, ${len} stages of growth. You're not expected to leap to the top — you just need to take the next step. The staircase is already built. All you have to do is climb. Seeing ${v} means you're in the middle of an upward climb, and you're exactly where you need to be on the staircase.`,
    love:`Your relationship is on an upward path. The next conversation, the next small act of trust — that's the step you take today.`,
    career:`Your career is ascending step by step. Don't look down. Don't count how many steps are left. Just take the next one.`,
    spiritual:`Spiritual growth is sequential. You can't skip stages. Each level of understanding builds on the last. Trust the order.`,
    guidance:`You don't need to see the top of the staircase. You just need to see the next step. Take it.`,
  }),
  // 2. Building blocks
  (first, last, len, v) => ({
    badge:"Progression", title:`${v} — Building Blocks`,
    body:`${v} is built from blocks stacked in order. Each digit adds to what came before: ${v[0]} (${first.theme}) → each successive digit builds upward. This number doesn't appear by chance — it appears when you're in a phase of constructive growth. You're not starting over; you're building on what you've already laid down. ${v} confirms your foundation is strong enough for the next floor.`,
    love:`Your relationship is being built on a solid foundation. Each positive interaction is another block in the wall.`,
    career:`Your career is under construction in the best possible way. What you're building now will stand for a long time.`,
    spiritual:`Spiritual understanding is cumulative. Every insight you've gained is still with you, supporting the next one.`,
    guidance:`Keep building. The foundation is set and the structure is sound. Don't stop adding blocks.`,
  }),
  // 3. Momentum
  (first, last, len, v) => ({
    badge:"Progression", title:`${v} — Forward Momentum`,
    body:`${v} moves in one direction: forward. There is no stopping, no going back, no plateau — each digit is higher than the last. This number appears when you've built genuine momentum in the area of ${first.theme}, and that momentum is carrying you toward ${last.theme}. ${v} says: don't slow down. You've built speed. Let it carry you through the next stage of the journey.`,
    love:`Relationship momentum is real right now. Don't let fear or hesitation slow what's naturally building between you.`,
    career:`You have professional momentum. The hardest part (getting started) is behind you. Now leverage the speed.`,
    spiritual:`Your spiritual practice has gathered momentum. This is not the time to skip a session or lose the thread.`,
    guidance:`Momentum is precious. Once you have it, protect it. Don't stop — the next level requires the speed you've built.`,
  }),
  // 4. Order
  (first, last, len, v) => ({
    badge:"Progression", title:`${v} — Natural Order`,
    body:`${v} follows the most natural order there is: one after another. The sequence from ${first.theme} to ${last.theme} is unfolding exactly as it should. Nothing is out of order, nothing is missing. ${v} reassures you that even when life feels random, there is a sequence underneath. The numbers are counting upward for a reason — order exists even when you can't feel it.`,
    love:`Your relationship is unfolding in the right order. Trust the sequence of connection, even when it feels slow.`,
    career:`Things are happening in the right professional order. The promotion, the opportunity, the challenge — all will arrive in the correct sequence.`,
    spiritual:`The universe operates on order, not chaos. Your spiritual journey follows a logic even when you can't perceive it.`,
    guidance:`The order is there. Trust it. Numbers don't lie.`,
  }),
  // 5. Escalation
  (first, last, len, v) => ({
    badge:"Progression", title:`${v} — Escalation`,
    body:`${v} escalates. Each digit rises above the last — ${last.theme} is a higher energy than ${first.theme}, and every number in between marks a stage of escalation. This is not gradual drift; it's deliberate ascension. You have been moving from one level to the next, and ${v} appears to confirm: the escalation is working. You are leveling up. Keep pushing. The resistance you feel is the altitude change.`,
    love:`Your relationship is leveling up. The growing pains you feel are the price of deeper connection. It's worth it.`,
    career:`Your career is escalating. This is not the time to get comfortable — it's the time to meet the rising expectation.`,
    spiritual:`Your spiritual capacity is expanding. What once felt difficult now feels natural. That's growth in action.`,
    guidance:`Height creates pressure, but pressure creates clarity. Don't mistake discomfort for a sign to stop.`,
  }),
  // 6. Blueprint
  (first, last, len, v) => ({
    badge:"Progression", title:`${v} — The Blueprint`,
    body:`${v} is a blueprint — each digit a plan for the next. The sequence from ${first.theme} to ${last.theme} is not random; it's architectural. ${v} appears when the universe is showing you the plan for what's being built. You may not see the full building yet, but you can see the sequence of rooms taking shape. Trust the blueprint. The architect knows what they're doing.`,
    love:`Your relationship is following a design you can't fully see yet. Trust the architecture, not the random details.`,
    career:`There is a plan for your career progression. The steps you can see are part of a larger design you'll understand later.`,
    spiritual:`Your spiritual journey follows a blueprint your soul created before this lifetime. You are walking the plan.`,
    guidance:`You can't see the full plan — but you can see enough to take the next step. Trust the blueprint.`,
  }),
  // 7. The path
  (first, last, len, v) => ({
    badge:"Progression", title:`${v} — The Path`,
    body:`${v} is a path, and paths lead somewhere. From ${first.theme} to ${last.theme}, the direction is clear. Each digit is a landmark on the journey — not an obstacle, not a detour, but a marker saying "you've come this far." ${v} appears when you need reassurance that you're on the right path. The numbers only go up. So do you.`,
    love:`Your relationship path is lit. You may not see the destination, but the next steps are visible. Keep walking together.`,
    career:`The professional path ahead of you is clearer than you think. Don't overcomplicate it — just follow the markers.`,
    spiritual:`The spiritual path has been walked before. You are not lost in the wilderness; you are on a trail that others have traveled.`,
    guidance:`The path is under your feet. Stop looking for a map. Just walk.`,
  }),
  // 8. Increment
  (first, last, len, v) => ({
    badge:"Progression", title:`${v} — One Step at a Time`,
    body:`${v} increases by one each time. One. That's all. Not a leap, not a shortcut — just one unit of growth per step. The wisdom of this number is that big changes happen through small increments. From ${first.theme} to ${last.theme} took only ${len-1} steps. ${v} says: you don't need a massive breakthrough. You just need one more. Then one more after that. Repeat until you arrive at ${last.theme}.`,
    love:`Relationships grow by inches, not miles. One act of kindness, one honest conversation at a time. Trust the inches.`,
    career:`Your career is advanced by incremental effort. Consistency beats intensity over the long run.`,
    spiritual:`Spiritual progress is measured in single steps, not grand leaps. Every small act of practice counts.`,
    guidance:`You only need to improve by one today. Then one tomorrow. That's how everything big gets built.`,
  }),
];

// ─── Reverse Sequence: 8 variants ───
const VARIANTS_REV: ((first: ThemeData, last: ThemeData, len: number, v: string) => AngelEntry)[] = [
  // 1. Review
  (first, last, len, v) => ({
    badge:"Review", title:`${v} — Time to Review`,
    body:`${v} counts down, not up. From ${first.theme} back through to ${last.theme}, each digit descends one step. This is not regression — it's review. ${v} says: before you can climb higher, you need to revisit what you've learned. The descent is deliberate. Go back over the lessons of ${first.theme} to ${last.theme} with the wisdom you have now. Review is not failure. Review is consolidation.`,
    love:`Review your relationship history without judgment. What past patterns still need release or closure?`,
    career:`A professional review period is here. Audit your recent moves before making the next big decision.`,
    spiritual:`Spiritual growth sometimes requires revisiting old lessons with new eyes. The descent is part of the journey.`,
    guidance:`Step back to move forward. Review is the secret of those who build to last.`,
  }),
  // 2. The descent
  (first, last, len, v) => ({
    badge:"Review", title:`${v} — The Descent`,
    body:`${v} descends: ${v[0]} → ${v[1]} → ... → ${v[v.length-1]}. This is a controlled descent, not a fall. From ${first.theme} down to ${last.theme}, each step is measured. Descents serve a purpose: they bring you down from the peak so you can climb the next mountain. ${v} appears when you're in a phase of coming down — from a high point, a busy period, an intense chapter. The descent is honorable. It's rest. It's preparation.`,
    love:`A relationship high is settling into something quieter. Don't mistake peace for distance.`,
    career:`You've been running hard professionally. The descent is recovery. Take it seriously.`,
    spiritual:`After spiritual highs come periods of integration. The descent is where growth solidifies into wisdom.`,
    guidance:`You can't stay at the peak forever. The descent isn't defeat — it's the other half of the climb.`,
  }),
  // 3. Unlearning
  (first, last, len, v) => ({
    badge:"Review", title:`${v} — Unlearning`,
    body:`${v} moves backward through the numbers, from ${first.theme} to ${last.theme}. If forward sequences are about learning, reverse sequences are about unlearning. ${v} asks: what do you need to release? What have you been carrying from the stage of ${first.theme} that no longer serves you as you return to ${last.theme}? The descent is a shedding. Each step down is a layer of old thinking falling away.`,
    love:`Release the relationship patterns you learned in the past. Unlearning is the first step toward healthier love.`,
    career:`Let go of professional approaches that worked before but no longer fit. Unlearn to upgrade.`,
    spiritual:`Old spiritual frameworks may need to be released before deeper understanding can take root. Shed the old skin.`,
    guidance:`You didn't come this far to carry what you learned in the beginning. Travel light.`,
  }),
  // 4. Retracing
  (first, last, len, v) => ({
    badge:"Review", title:`${v} — Retracing Steps`,
    body:`${v} retraces the steps you've already taken. From ${first.theme} down to ${last.theme}, each digit is a place you've been before. Retracing is not the same as going backward — when you retrace, you see the same path differently because you're not the same person who walked it the first time. ${v} says: something from your past is worth revisiting, not because you missed it, but because you're ready to see it differently now.`,
    love:`A past relationship or pattern is circling back into your awareness. You're being shown it again because you're finally ready to understand it.`,
    career:`Don't dismiss old professional connections or unfinished projects. Revisiting them with your current perspective may unlock something.`,
    spiritual:`Your spiritual path is cyclical, not linear. Revisiting old questions with new wisdom is the design.`,
    guidance:`The same path looks different the second time because you're different. Walk it again and see.`,
  }),
  // 5. Emptying the cup
  (first, last, len, v) => ({
    badge:"Review", title:`${v} — Emptying the Cup`,
    body:`${v} empties as it goes. The digits don't rise — they fall, from ${first.theme} to ${last.theme}. This is the energy of emptying, of making space. You cannot receive what's next if your cup is still full of what's been. ${v} appears when the universe is helping you pour out: old identities, completed chapters, beliefs you've outgrown. The descent from ${first.theme} to ${last.theme} is the sound of pouring. Listen to it.`,
    love:`Release the expectations you've been holding about love. An empty cup is ready for a new pour.`,
    career:`Let go of outdated professional identities. You're not your last role — you're ready for the next one.`,
    spiritual:`In emptiness, spirit can enter. Stop filling every moment with doing. Leave room for being.`,
    guidance:`Emptying is not loss — it's preparation. You're making space for what you've been asking for.`,
  }),
  // 6. Lessons learned
  (first, last, len, v) => ({
    badge:"Review", title:`${v} — Lessons Learned`,
    body:`${v} counts backward, reviewing each lesson as it descends. From ${first.theme} to ${last.theme}, this number marks the completion of a learning cycle. You're not falling — you're graduating. The descent is a diploma walk: each step down acknowledges the lesson mastered at that level. ${v} says you have learned what you came to learn from this cycle. Now return to ${last.theme} and begin again.`,
    love:`You've learned the lesson this relationship cycle came to teach you. What remains is integration.`,
    career:`A professional learning cycle is complete. The skills and wisdom you've gained are now part of your foundation.`,
    spiritual:`You have graduated from a spiritual phase. Celebrate the completion before you start the next module.`,
    guidance:`The lesson is complete. Take your learning and descend with gratitude.`,
  }),
  // 7. Integration
  (first, last, len, v) => ({
    badge:"Review", title:`${v} — Integration`,
    body:`${v} moves from higher to lower, from ${first.theme} down to ${last.theme}. This is the energy of integration — bringing high ideas down into grounded practice. It's easy to be inspired at the level of ${first.theme}; the real work is bringing that inspiration down through each level to the foundation of ${last.theme}. ${v} says: take what you've learned at the peak and integrate it into your daily life. Ground the vision.`,
    love:`Apply the relationship insights you've gained at a high level to your actual, everyday interactions. Ground it.`,
    career:`Big professional visions need to be broken down into grounded action steps. Integration is where the real work lives.`,
    spiritual:`The highest spiritual truths mean nothing if they don't change how you live on Tuesday afternoon. Bring them down.`,
    guidance:`Knowing is not enough. The descent from knowledge to practice is where change happens.`,
  }),
  // 8. Completion
  (first, last, len, v) => ({
    badge:"Review", title:`${v} — Coming Full Circle`,
    body:`${v} descends through ${len} digits, from ${first.theme} back toward ${last.theme}. The last digit is not a failure — it's a return. A reverse sequence that ends at ${last.theme} is actually completing a circle. What began at the energy of ${first.theme} and rose higher is now returning to its origin point, enriched by the journey. ${v} marks the fulfillment of a cycle. You made the ascent. You learned the lessons. Now you return — not as you were, but as you've become.`,
    love:`A relationship cycle is reaching its fulfillment. Honor what was completed, then turn the page with gratitude.`,
    career:`A professional chapter is closing. You're not abandoning it — you're completing it. Completion is different from quitting.`,
    spiritual:`Coming full circle is the most sacred shape in the universe. Your spiritual journey is completing a necessary orbit.`,
    guidance:`The circle closes not to trap you, but to release you to the next orbit. Completion is freedom.`,
  }),
];

// ─── Generic fallback: 6 variants ───
const VARIANTS_GENERIC: ((themes: {pos:string,neg:string,theme:string}[], v: string) => AngelEntry)[] = [
  (digits, v) => ({
    badge:"Your Message", title:`${v} — A Personal Sign`,
    body:`${v} isn't a common angel number — but that doesn't mean it's meaningless. Sometimes the most powerful messages are the ones addressed to you alone. The combination of digits in ${v} creates a unique energetic signature that only you can fully decode. Trust what this number felt like when you saw it. Your instinct about its meaning is more reliable than any external interpretation. Some numbers speak a private language.`,
    love:"Notice how this number made you feel when you thought about love. That feeling is your answer.",
    career:"Your career path has its own unique number. This one might be it. Pay attention to what comes to mind.",
    spiritual:"Personal numbers carry personal truths. Meditate on what this number means to you — the answer is already forming.",
    guidance:"Not every message needs a dictionary. Some numbers are just between you and the universe.",
  }),
  (digits, v) => ({
    badge:"Your Message", title:`${v} — The Private Code`,
    body:`${v} is a private code between you and your guides. This specific combination of digits hasn't been cataloged in the standard angel number references, but that doesn't make it less real. Codes work because they are understood by the sender and receiver — no third party needed. ${v} is meaningful because you recognize it as meaningful. The universe chose this exact number to reach you because it knew you'd recognize the pattern. Don't overthink it.`,
    love:"Your intuition about this number and your relationship is the most accurate guide you have. Trust your read.",
    career:"Career guidance sometimes comes in personal symbols. Let your first instinct about ${v} guide your next professional decision.",
    spiritual:"Private communication from the universe is the most sacred kind. You have a direct line — use it.",
    guidance:"You were never meant to look this one up. You were meant to recognize it when you saw it.",
  }),
  (digits, v) => ({
    badge:"Your Message", title:`${v} — Inner Knowing`,
    body:`${v} is an internal message — a number your subconscious chose to bring to your attention. Carl Jung called this synchronicity: a meaningful coincidence that bridges the inner and outer worlds. The digits ${v.split("").join(" + ")} create a sum, but the real meaning is not in the math — it's in the moment you saw it. What were you thinking about? What were you feeling? That context is the message.`,
    love:"Stop searching for what this number means in love. Instead, remember what you were feeling when you saw it. That's the message.",
    career:"Your subconscious is trying to tell you something about your career through this number. Listen to the feeling, not the definition.",
    spiritual:'Synchronicity is the universe’s way of saying “you’re on the right track.” This moment is the message.',
    guidance:"The number is a pointer. The real message is what you were thinking when you noticed it.",
  }),
  (digits, v) => ({
    badge:"Your Message", title:`${v} — Your Confirmation`,
    body:`${v} is confirmation — not of a universal meaning, but of your own knowing. You didn't look this number up by accident. You looked it up because you already sensed it meant something. ${v} appearing in your life at this moment is the universe putting a checkmark next to what you already suspected. You don't need me to tell you what it means. You already know. This is just the receipt. You were right.`,
    love:"You already know what this number means for your love life. Trust the knowing. It came from somewhere real.",
    career:"Your professional instinct about this situation is correct. Consider this number a confirmation from the universe.",
    spiritual:"The universe confirms what you already know through signs you can't ignore. This is that sign.",
    guidance:"You didn't need to read this to know. But read it anyway: you were right.",
  }),
  (digits, v) => ({
    badge:"Your Message", title:`${v} — The Quiet Whisper`,
    body:`${v} is a quiet whisper in a world that's always shouting. This number didn't come to you in a blaring billboard — it came subtly, repeatedly, gently. The combination of ${digits.map(d => d.theme).join(" and ")} energies is present in your life right now, but the message is soft because it doesn't need to be loud. Quiet messages are often the most important ones. They assume you're listening. Are you?`,
    love:"A quiet relationship truth is trying to get your attention. Be still enough to hear it.",
    career:"Not every professional sign is a loud alarm. Some are nudges. This number is a nudge.",
    spiritual:"The still, small voice speaks in numbers sometimes. ${v} is one of those times.",
    guidance:"Whispers are for those who are already paying attention. You're reading this. That means you are.",
  }),
  (digits, v) => ({
    badge:"Your Message", title:`${v} — The Pattern You Noticed`,
    body:`${v} is a pattern you noticed in a world full of patterns. Nothing is random. The human brain is designed to find meaning, and when you find meaning in ${v}, that act of recognition is itself significant. You didn't just see digits — you saw a message. The specific energies of ${digits.map(d => d.theme).join(" and ")} are converging in your life right now, and ${v} is the flag the universe planted to make sure you noticed. Good eye.`,
    love:"You noticing patterns in your relationships is not paranoia — it's perception. Trust what you're seeing.",
    career:"Your ability to notice patterns is your professional superpower right now. This number is proof of that skill.",
    spiritual:"The universe speaks in patterns. You noticed one. That means you're ready to understand the rest.",
    guidance:"You saw it. You noticed. That's the first step. Now ask yourself: what else have you been noticing?",
  }),
];

// ─── Variant dispatch ───
function pickMirror3(v: string): AngelEntry {
  const a = getTheme(v[0]);
  return VARIANTS_M3[variantIndex(v, VARIANTS_M3.length)](a, v);
}
function pickMirror4(v: string): AngelEntry {
  const a = getTheme(v[0]), b = getTheme(v[1]);
  return VARIANTS_M4[variantIndex(v, VARIANTS_M4.length)](a, b, v);
}
function pickAABB(v: string): AngelEntry {
  const a = getTheme(v[0]), b = getTheme(v[2]);
  return VARIANTS_AABB[variantIndex(v, VARIANTS_AABB.length)](a, b, v);
}
function pickSequence(v: string): AngelEntry {
  const d = v.split(""), first = getTheme(d[0]), last = getTheme(d[d.length - 1]);
  return VARIANTS_SEQ[variantIndex(v, VARIANTS_SEQ.length)](first, last, d.length, v);
}
function pickReverse(v: string): AngelEntry {
  const d = v.split(""), first = getTheme(d[0]), last = getTheme(d[d.length - 1]);
  return VARIANTS_REV[variantIndex(v, VARIANTS_REV.length)](first, last, d.length, v);
}
function pickGeneric(v: string): AngelEntry {
  const themes = v.split("").map(d => getTheme(d));
  return VARIANTS_GENERIC[variantIndex(v, VARIANTS_GENERIC.length)](themes, v);
}

function isMirror3(v: string): boolean {
  return v.length === 3 && v[0] === v[2];
}
function isMirror4(v: string): boolean {
  return v.length === 4 && v[0] === v[3] && v[1] === v[2];
}
function isAABB(v: string): boolean {
  return v.length === 4 && v[0] === v[1] && v[2] === v[3] && v[0] !== v[2];
}
function isSequence(v: string): boolean {
  if (v.length < 3) return false;
  const d = v.split("").map(Number);
  for (let i = 1; i < d.length; i++) if (d[i] !== d[i-1] + 1) return false;
  return true;
}
function isReverseSequence(v: string): boolean {
  if (v.length < 3) return false;
  const d = v.split("").map(Number);
  for (let i = 1; i < d.length; i++) if (d[i] !== d[i-1] - 1) return false;
  return true;
}

function generateFallback(v: string): AngelEntry {
  if (isSequence(v)) return pickSequence(v);
  if (isReverseSequence(v)) return pickReverse(v);
  if (isMirror4(v)) return pickMirror4(v);
  if (isAABB(v)) return pickAABB(v);
  if (isMirror3(v)) return pickMirror3(v);
  return pickGeneric(v);
}

// ─── All known number keys (complete index) ───
function buildAllKeys(): string[] {
  const keys = new Set<string>();

  // Popular
  Object.keys(POPULAR).forEach(k => keys.add(k));
  Object.keys(EXTRA).forEach(k => keys.add(k));

  // Triple repeats 111-999 (already in popular)
  // Quadruple repeats 1111-9999 (already mostly in popular/extra)

  // Double digits 11-99
  for (let i = 1; i <= 9; i++) keys.add(`${i}${i}`);

  // Quad repeats 0000-9999 (already covered)

  // 3-digit mirrors ABA
  for (let a = 0; a <= 9; a++) {
    for (let b = 0; b <= 9; b++) {
      if (a === 0 && b === 0) continue; // 000 is already there
      keys.add(`${a}${b}${a}`);
    }
  }

  // 4-digit mirrors ABBA
  for (let a = 0; a <= 9; a++) {
    for (let b = 0; b <= 9; b++) {
      if (a === 0 && b === 0) continue;
      keys.add(`${a}${b}${b}${a}`);
    }
  }

  // AABB
  for (let a = 0; a <= 9; a++) {
    for (let b = 0; b <= 9; b++) {
      if (a === b) continue;
      if (a === 0 && b === 0) continue;
      keys.add(`${a}${a}${b}${b}`);
    }
  }

  // Sequences
  for (let len = 3; len <= 4; len++) {
    for (let start = 0; start <= 9 - len + 1; start++) {
      let s = "";
      for (let i = 0; i < len; i++) s += (start + i).toString();
      keys.add(s);
    }
  }

  // Reverse sequences
  for (let len = 3; len <= 4; len++) {
    for (let start = len - 1; start <= 9; start++) {
      let s = "";
      for (let i = 0; i < len; i++) s += (start - i).toString();
      keys.add(s);
    }
  }

  // Remove any 0-length or whitespace keys
  const result = Array.from(keys).filter(k => k.length >= 2);
  result.sort();
  return result;
}

export const ALL_KEYS = buildAllKeys();

// ─── Main lookup function ───
export function findAngelNumber(raw: string): AngelEntry | null {
  const v = raw.replace(/[^0-9]/g, "");
  if (!v) return null;

  // Check popular first
  if (POPULAR[v]) return POPULAR[v];
  if (EXTRA[v]) return EXTRA[v];

  // Generate fallback based on pattern
  return generateFallback(v);
}

export function isPopular(v: string): boolean {
  return !!POPULAR[v];
}

// ─── Popular numbers for UI display (ordered) ───
export const POPULAR_KEYS = [
  "111","222","333","444","555","666","777","888","999",
  "000","11","22","33","44","55",
  "1010","1111","1212","1234","1313","1414",
  "1515","1616","1717","1818","1919",
  "2020","2121","2222","3333","4444",
  "1122","911"
];

export function getEntry(key: string): AngelEntry | null {
  return POPULAR[key] || EXTRA[key] || null;
}
