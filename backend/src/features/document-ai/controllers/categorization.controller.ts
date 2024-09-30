import { Request, Response } from "express";
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../../../config/constants";


export async function categorize(req: Request, res: Response) {
    const input = req.query.input;

    const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
    });


    /**
     * NOTE: This variable will be replaced with
     * data from the database hehe 
     */
    const parts = [
        { text: "input: Apple MacBook Pro" },
        { text: "output: Office Equipment" },
        { text: "input: HP LaserJet Printer" },
        { text: "output: Office Equipment" },
        { text: "input: Starbucks Coffee" },
        { text: "output: Pantry Supplies" },
        { text: "input: GoDaddy Website Hosting" },
        { text: "output: Services" },
        { text: "input: Philips LED Light Bulbs" },
        { text: "output: Utilities" },
        { text: "input: Facebook Ads Campaign" },
        { text: "output: Marketing Expenses" },
        { text: "input: QuickBooks Accounting Software" },
        { text: "output: Software" },
        { text: "input: Dell Monitor" },
        { text: "output: Office Equipment" },
        { text: "input: Microsoft Office 365" },
        { text: "output: Software" },
        { text: "input: Nespresso Coffee Machine" },
        { text: "output: Pantry Supplies" },
        { text: "input: Canon EOS Rebel T7 Camera" },
        { text: "output: Office Equipment" },
        { text: "input: Dropbox Business Subscription" },
        { text: "output: Subscription" },
        { text: "input: Samsung Galaxy S23" },
        { text: "output: Office Equipment" },
        { text: "input: Staples File Folders" },
        { text: "output: Office Supplies" },
        { text: "input: Jabra Evolve2 75 Headset" },
        { text: "output: Office Equipment" },
        { text: "input: Tide Laundry Detergent" },
        { text: "output: Office Supplies" },
        { text: "input: Anker PowerCore Portable Charger" },
        { text: "output: Office Equipment" },
        { text: "input: Brother P-Touch Label Maker" },
        { text: "output: Office Supplies" },
        { text: "input: Slack Plus Subscription" },
        { text: "output: Subscription" },
        { text: "input: Zoom Business Plan" },
        { text: "output: Subscription" },
        { text: "input: GitHub Teams Subscription" },
        { text: "output: Subscription" },
        { text: "input: Adobe Creative Cloud" },
        { text: "output: Subscription" },
        { text: `input: Category for \"${input}\"` },
        { text: "output: " },
    ];


    const result = await model.generateContent({
        contents: [{ role: "user", parts }],
        generationConfig: {
            temperature: 1,
            topP: 0.95,
            topK: 64,
            maxOutputTokens: 8192,
            responseMimeType: "text/plain",
        }
    });

    return res.status(200).json({
        input,
        result: result.response.text()
    });
}