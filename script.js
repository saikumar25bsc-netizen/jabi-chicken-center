function orderViaWhatsApp(itemName) {
    // మీ కరెక్ట్ మొబైల్ నెంబర్ (ముందు 91 ఇండియా కోడ్ ఉండాలి)
    var phoneNumber = "9100587831"; 
    
    // కస్టమర్‌కు మరియు మీకు అర్థమయ్యేలా వెళ్ళే ఆర్డర్ మెసేజ్
    var message = "Hello Jabi Chicken Center, I want to order " + itemName + ". Please confirm my order.";
    
    // వాట్సాప్ లింక్ క్రియేషన్
    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    
    // కొత్త ట్యాబ్‌లో వాట్సాప్ ఓపెన్ అవుతుంది
    window.open(whatsappURL, '_blank');
}