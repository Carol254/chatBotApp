import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

export class Message{
    constructor(public author: string, public content: string){}
}

@Injectable()

export class ChatService{

    audioFile = new Audio(
        "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/success.mp3"
      );

    constructor(){}

    conversation = new Subject<Message[]>();

    messageMap:{[key:string]:string} = {
        "hi": "Hello",
        "Hi": "Hello",
        "Who are you": "My name is Agular Bot,How may i help you",
        "How are you": "Great, thank you for asking!",
        "what is mental health": "Mental wellness is all about maintaining a healthy state of mind and emotional balance. ",
        "how can I achieve it": "To achieve it, you can start by taking care of your physical health through regular exercise and a balanced diet. Incorporating stress management techniques like meditation or mindfulness can also help. Don't forget the importance of social connections and finding a balance between work and relaxation",
        "Can you recommend some meditation apps for beginners?": "Certainly! Some great meditation apps for beginners include Headspace, Calm, and Insight Timer",
        "What are the early signs of depression": " Early signs of depression can include persistent feelings of sadness or emptiness, a loss of interest in activities you used to enjoy, changes in appetite or weight, difficulty sleeping or oversleeping, fatigue, trouble concentrating, feelings of worthlessness, and thoughts of self-harm. If you or someone you know is experiencing these symptoms, it's important to seek help from a mental health professional.",
        "How can I build a daily routine that promotes mental wellness": " Building a daily routine that promotes mental wellness involves setting aside time for self-care. Incorporate activities like exercise, meditation, or mindfulness into your schedule. Prioritize sleep and nutrition, and make time for hobbies and relaxation. It's important to maintain a work-life balance and spend quality time with loved ones.",
        "What are some signs that someone might be experiencing an anxiety disorder": "Signs of an anxiety disorder can include excessive worry, restlessness, irritability, muscle tension, sleep disturbances, and avoidance of certain situations.",
        "Can you suggest some techniques for practicing self-compassion?": "Self-compassion techniques include treating yourself with kindness, practicing self-forgiveness, and using positive self-talk. Mindfulness meditation can also help cultivate self-compassion.",
        " Can you recommend books or resources on mental health and wellness": " Certainly! Some highly recommended books include The Gifts of Imperfection by Brené Brown The Power of Now by Eckhart Tolle, and The Happiness Hypothesis by Jonathan Haidt. These books provide valuable insights into mental health and wellness.",
        default: "I can't understand. Can you please repeat"
    }

    getBotAnswer(msg: string){
        const userMessage = new Message("user", msg);
        this.conversation.next([userMessage]);
        const botMessage = new Message("bot", this.getBotMessage(msg));

        setTimeout(() => {
            this.playFile();
            this.conversation.next([botMessage]);
        }, 1500);
    }

    playFile() {
        this.audioFile.play();
      }

      getBotMessage(question: string) {
        let answer = this.messageMap[question];
        return answer || this.messageMap["default"];
      }

}