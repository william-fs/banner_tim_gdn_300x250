    let animation,
    currentTime,
    a1,
    a2,
    a3,
    a4,
    a5,
    a6,
    ate_a,
    ate_c,
    bonus_a,
    c1,
    c2,
    c3,
    c4,
    confete_b,
    cta_fundo,
    cta_texto,
    fundo_b,
    fundo_c,
    gratis_b,
    gratis_c,
    ilim_b,
    ilim_c,
    linha_b,
    logo,
    m_a,
    m_c,
    preco,
    serpentinas_a,
    serpentinas_c,
    social_b,
    social_c,
    tim_texto,
    line,
    box_a1,
    box_a2,
    box_c1,
    

    countloop = 0;

    /**** Start ****/

    function startStep1(){
        currentTime = 0;
        clearInterval(animation);
        animation = setInterval( step1,  100);
    }

    function startStep2(){
        currentTime = 0;
        clearInterval(animation);
        animation = setInterval( step2,  100);
    }

    function startStep3(){
        currentTime = 0;
        clearInterval(animation);
        animation = setInterval( step3,  100);
    }

    function startStep4(){currentTime=0,clearInterval(animation),countloop<2&&(animation=setInterval(step4,100))}

    function initAnimation(){
        
        a1 = document.querySelector('.a1');
        a2 = document.querySelector('.a2');
        a3 = document.querySelector('.a3');
        a4 = document.querySelector('.a4');
        a5 = document.querySelector('.a5');
        a6 = document.querySelector('.a6');
        ate_a = document.querySelector('.ate_a');
        ate_c = document.querySelector('.ate_c');
        bonus_a = document.querySelector('.bonus_a');
        c1 = document.querySelector('.c1');
        c2 = document.querySelector('.c2');
        c3 = document.querySelector('.c3');
        c4 = document.querySelector('.c4');
        confete_b = document.querySelector('.confete_b');
        cta_fundo = document.querySelector('.cta_fundo');
        cta_texto = document.querySelector('.cta_texto');
        fundo_b = document.querySelector('.fundo_b');
        fundo_c = document.querySelector('.fundo_c');
        gratis_b = document.querySelector('.gratis_b');
        gratis_c = document.querySelector('.gratis_c');
        ilim_b = document.querySelector('.ilim_b');
        ilim_c = document.querySelector('.ilim_c');
        linha_b = document.querySelector('.linha_b');
        logo = document.querySelector('.logo');
        m_a = document.querySelector('.m_a');
        m_c = document.querySelector('.m_c');
        preco = document.querySelector('.preco');
        serpentinas_a = document.querySelector('.serpentinas_a');
        serpentinas_c = document.querySelector('.serpentinas_c');
        social_b = document.querySelector('.social_b');
        social_c = document.querySelector('.social_c');
        tim_texto = document.querySelector('.tim_texto');
        line = document.querySelector('.line');
        box_a1 = document.querySelector('.box_a1');
        box_a2 = document.querySelector('.box_a2');
        box_c1 = document.querySelector('.box_c1');

        setTimeout(function(){ startStep1() }, 500);
    }

    function step1(){
        currentTime = parseFloat( (currentTime + 0.1).toFixed(2) );

        if (currentTime == 0.1) {
            countloop++;
            tim_texto.classList.add('_in');
            line.classList.add('_in');
            return logo.classList.add('_in');
        }

        if (currentTime == 0.4) {
            a1.classList.add('_in');
            a2.classList.add('_in');
            a3.classList.add('_in2');
            return box_a1.classList.add('_in');
        }

        if (currentTime == 0.6) {
            a1.classList.remove('_in');
            a2.classList.remove('_in');
            return a3.classList.remove('_in2');
        }

        if (currentTime == 0.8) {
            a1.classList.add('_in');
            a2.classList.add('_in');
            return a3.classList.add('_in2');
        }

        if (currentTime == 1) {
            a1.classList.remove('_in');
            a2.classList.remove('_in');
            return a3.classList.remove('_in2');
        }

        if (currentTime == 1.1) {
            return ate_a.classList.add('_in');
        }

        if (currentTime == 1.4) {
            return a4.classList.add('_in');
        }

        if (currentTime == 1.7) {
            return m_a.classList.add('_in');
        }

        if (currentTime == 2) {
            a5.classList.add('_in');
            return box_a2.classList.add('_in');
        }

        if (currentTime == 2.2) {
            return a5.classList.remove('_in');
        }

        if (currentTime == 2.4) {
            return a5.classList.add('_in2');
        }

        if (currentTime == 2.6) {
            return a5.classList.remove('_in2');
        }

        if (currentTime == 2.9) {
            return a6.classList.add('_in');
        }

        if (currentTime == 3.2) {
            serpentinas_a.classList.add('_in');
            return bonus_a.classList.add('_in');
        }

        if (currentTime == 3.5) {
            preco.classList.add('_in');
            cta_texto.classList.add('_in');
            return cta_fundo.classList.add('_in');
        }

            if (currentTime == 4) {
                return cta_fundo.classList.add('_scale');
            }

            if (currentTime == 4.3) {
                return cta_fundo.classList.remove('_scale');
            }


        if (currentTime == 5.7) {
            box_a1.classList.remove('_in');
            box_a2.classList.remove('_in');
            m_a.classList.remove('_in');
            a4.classList.remove('_in');
            a6.classList.remove('_in');
            ate_a.classList.remove('_in');
            bonus_a.classList.remove('_in');
            return serpentinas_a.classList.remove('_in');
        }

        if (currentTime == 6) {
            return startStep2();
        }
    }

    function step2(){
        currentTime = parseFloat( (currentTime + 0.1).toFixed(2) );

        if (currentTime == 0.1) {
            linha_b.classList.add('_in');
            return fundo_b.classList.add('_in');
        }

        if (currentTime == 0.4) {
            social_b.classList.add('_in');
            return confete_b.classList.add('_in');
        }

        if (currentTime == 0.7) {
            return gratis_b.classList.add('_in');
        }

        if (currentTime == 1) {
            return ilim_b.classList.add('_in');
        }

            if (currentTime == 1.5) {
                return cta_fundo.classList.add('_scale');
            }

            if (currentTime == 1.8) {
                return cta_fundo.classList.remove('_scale');
            }


        if (currentTime == 3.1) {
            linha_b.classList.remove('_in');
            fundo_b.classList.remove('_in');
            ilim_b.classList.remove('_in');
            gratis_b.classList.remove('_in');
            social_b.classList.remove('_in');
            return confete_b.classList.remove('_in');
        }

        if (currentTime == 3.4) {
            return startStep3();
        }
    }

    function step3(){
        currentTime = parseFloat( (currentTime + 0.1).toFixed(2) );


        if (currentTime == 0.1) {
            c1.classList.add('_in');
            c2.classList.add('_in');
            c3.classList.add('_in2');
            return box_c1.classList.add('_in');
        }

        if (currentTime == 0.3) {
            c1.classList.remove('_in');
            c2.classList.remove('_in');
            return c3.classList.remove('_in2');
        }

        if (currentTime == 0.5) {
            c1.classList.add('_in');
            c2.classList.add('_in');
            return c3.classList.add('_in2');
        }

        if (currentTime == 0.7) {
            c1.classList.remove('_in');
            c2.classList.remove('_in');
            return c3.classList.remove('_in2');
        }

        if (currentTime == 1) {
            return ate_c.classList.add('_in');
        }

        if (currentTime == 1.3) {
            return c4.classList.add('_in');
        }

        if (currentTime == 1.6) {
            return m_c.classList.add('_in');
        }

        if (currentTime == 1.9) {
            return fundo_c.classList.add('_in');
        }

        if (currentTime == 2.2) {
            return social_c.classList.add('_in');
        }

        if (currentTime == 2.5) {
            return gratis_c.classList.add('_in');
        }

        if (currentTime == 2.8) {
            serpentinas_c.classList.add('_in');
            return ilim_c.classList.add('_in');
        }

            if (currentTime == 3.3) {
                return cta_fundo.classList.add('_scale');
            }

            if (currentTime == 3.6) {
                return cta_fundo.classList.remove('_scale');
            }

        if (currentTime == 5) {
            return startStep4();
        }
    }

    function step4(){
    currentTime = parseFloat( (currentTime + 0.1).toFixed(2) );

    if (currentTime == 0.1) {
        box_c1.classList.remove('_in');
        ate_c.classList.remove('_in');
        c4.classList.remove('_in');
        m_c.classList.remove('_in');
        fundo_c.classList.remove('_in');
        social_c.classList.remove('_in');
        ilim_c.classList.remove('_in');
        gratis_c.classList.remove('_in');
        serpentinas_c.classList.remove('_in');
        cta_fundo.classList.remove('_in');
        cta_texto.classList.remove('_in');
        logo.classList.remove('_in');
        line.classList.remove('_in');
        tim_texto.classList.remove('_in');
        return preco.classList.remove('_in');
    }

    if (currentTime == 0.4) {
        return startStep1();
    }
}

window.onload = function() {
    initAnimation();
};