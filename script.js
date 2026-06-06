function orderViaWhatsApp(itemName) {
    // ఇక్కడ 91 పక్కన మీ మొబైల్ నెంబర్ ఇవ్వండి
    var phoneNumber = "919999999999"; 
    
    var message = "Hello Jabi Chicken Center, I want to order: " + itemName;
    var whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
    
    window.open(whatsappURL, '_blank');
}
