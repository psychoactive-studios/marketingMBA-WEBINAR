$(document).ready(function () {
    $('.tooltip_wrap button .fa-question').on('mouseover', function () {
        $(this).parent().parent().find('.tooltext').fadeIn('fast')
    })

    $('.tooltip_wrap button .fa-question').on('mouseout', function () {
        $(this).parent().parent().find('.tooltext').fadeOut('fast')
    })

    $('#calculate_webinar_roi').click(function () {
        var currency = $('#currency').val(),
            t = WROI.getNumericValue($('#webinars-per-month').val()),
            e = WROI.getNumericValue($('#webinars-avg-duration').val()),
            a = WROI.getNumericValue($('#avg-revenue-per-deal').attr('data-val')),
            i = WROI.getNumericValue($('#webinar-project-avg-duration').val()),
            s = $('#webinar-project-avg-duration-unit').val(),
            r = WROI.getNumericValue($('#webinar-licence-cost').attr('data-val')),
            n = WROI.getNumericValue($('#conf-recording-cost').attr('data-val')),
            c = WROI.getNumericValue($('#archived-recording-cost').attr('data-val')),
            o = WROI.getNumericValue($('#banner-ad-spend').attr('data-val')),
            l = WROI.getNumericValue($('#google-ad-spend').attr('data-val')),
            u = WROI.getNumericValue($('#social-media-campaign-spend').attr('data-val')),
            h = WROI.getNumericValue($('#direct-email-spend').attr('data-val')),
            m = WROI.getNumericValue($('#promo-email-spend').attr('data-val')),
            f = WROI.getNumericValue($('#email-list-purchase').attr('data-val')),
            d = WROI.getNumericValue($('#partners-sponsoring').attr('data-val')),
            v = WROI.getNumericValue($('#staff-avg-salary').attr('data-val')),
            b = WROI.getNumericValue($('#staff-employees-working-on-webinar').val()),
            p = WROI.getNumericValue($('#staff-avg-time-webinar-deployment').val()),
            g = WROI.getNumericValue($('#subscribers').val()),
            y = WROI.getNumericValue($('#email-open-rate').val()) / 100,
            D = WROI.getNumericValue($('#click-through-rate').val()) / 100,
            k = WROI.getNumericValue($('#registration-rate').val()) / 100,
            R = WROI.getNumericValue($('#attendance-rate').val()) / 100,
            V = WROI.getNumericValue($('#conversion-marketing-leads-rate').val()) / 100,
            S = WROI.getNumericValue($('#conversion-sales-leads-rate').val()) / 100,
            w = WROI.getNumericValue($('#conversion-opportunities-rate').val()) / 100,
            C = WROI.getNumericValue($('#conversion-closed-deal-rate').val()) / 100,
            F = n * e * t,
            x = c * e * t,
            N = [r, F, x].reduce(function (t, e) {
                return t + e
            })

        $('#result-webinar-licence-cost').html(WROI.formatCurrencyField(r, currency)),
            $('#result-conf-recording-cost').html(WROI.formatCurrencyField(F, currency)),
            $('#result-archived-recording-cost').html(
                WROI.formatCurrencyField(x, currency)
            ),
            $('#result-technology-total-cost').html(WROI.formatCurrencyField(N, currency))
        var j = o * t,
            M = l * t,
            P = u * t,
            O = h * t,
            T = m * t,
            E = f * t,
            _ = d * t,
            z = [j, M, P, O, T, E, _].reduce(function (t, e) {
                return t + e
            })
        $('#result-banner-ad-spend').html(WROI.formatCurrencyField(j, currency)),
            $('#result-google-ad-spend').html(WROI.formatCurrencyField(M, currency)),
            $('#result-social-media-campaign-spend').html(
                WROI.formatCurrencyField(P, currency)
            ),
            $('#result-direct-email-spend').html(WROI.formatCurrencyField(O, currency)),
            $('#result-promo-email-spend').html(WROI.formatCurrencyField(T, currency)),
            $('#result-email-list-purchase').html(WROI.formatCurrencyField(E, currency)),
            $('#result-partners-sponsoring').html(WROI.formatCurrencyField(_, currency)),
            $('#result-promotion-total-cost').html(WROI.formatCurrencyField(z, currency))
        var G = v / 4 / 40,
            W = G * b * p * t
        $('#result-staff-avg-hourly-rate').html(WROI.formatCurrencyField(G, currency)),
            $('#result-staff-total-cost').html(WROI.formatCurrencyField(W, currency))
        var B = Math.round(y * g),
            I = Math.round(D * g),
            Q = Math.round(k * I),
            q = Math.round(R * Q),
            J = Math.round(V * q),
            U = Math.round(S * J),
            Y = Math.round(w * U),
            Z = Math.round(C * Y),
            A = (Z / q) * 100
        $('#result-email-open-number').html(WROI.formatNumberField(B)),
            $('#result-click-through-number').html(WROI.formatNumberField(I)),
            $('#result-registration-number').html(WROI.formatNumberField(Q)),
            $('#result-attendance-number').html(WROI.formatNumberField(q)),
            $('#result-conversion-marketing-leads-number').html(
                WROI.formatNumberField(J)
            ),
            $('#result-conversion-sales-leads-number').html(WROI.formatNumberField(U)),
            $('#result-conversion-opportunities-number').html(WROI.formatNumberField(Y)),
            $('#result-conversion-closed-deal-number').html(WROI.formatNumberField(Z)),
            $('#result-closed-deal-to-attendance-ratio').html(
                WROI.formatNumberField(A.toFixed(1)) + '%'
            )
        var L = [N, z, W].reduce(function (t, e) {
            return t + e
        })
        $('#result-webinar-total-cost').html(WROI.formatCurrencyField(L, currency))

        var H = Z * a * t,
            K = H - L,
            X = (K / L) * 100,
            annualized_roi = 0,
            tt = L / a,
            et = tt / A
        switch (s) {
            case 'days':
                annualized_roi = (365 * X) / i
                break
            case 'months':
                annualized_roi = (12 * X) / i
                break
            case 'years':
                annualized_roi = (1 * X) / i
        }
        $('#result-gross-revenue-from-leads').html(WROI.formatCurrencyField(H, currency)),
            $('#result-profit').html(WROI.formatCurrencyField(K, currency)),
            $('#result-roi').html(WROI.formatNumberField(Math.round(X)) + '%'),
            $('#result-annualized-roi').html(
                WROI.formatNumberField(Math.round(annualized_roi)) + '%'
            ),
            $('#result-closed-deals-number-even').html(
                WROI.formatNumberField(Math.round(tt))
            ),
            $('#result-attendants-number-even').html(
                WROI.formatNumberField(Math.round(et))
            )
        return false
    })

    $('.currency_field').on('focus', function () {
        val = $(this).attr('data-val')
        $(this).val(val)
    })
    $('.currency_field').on('keyup', function () {
        val = $(this).val()
        $(this).attr('data-val', val)
    })
    $(document).on('blur load', '.currency_field', function () {
        val = $(this).attr('data-val')
        currency = $('#currency').val()
        formated_val = WROI.formatCurrencyField(val, currency)
        $(this).val(formated_val)
    })

    $('.currency_field').each(function () {
        val = $(this).attr('data-val')
        currency = $('#currency').val()
        formated_val = WROI.formatCurrencyField(val, currency)
        $(this).val(formated_val)
    })
})

var WROI = {
    Calculator: function (data) {
        data.email_open = Math.round(data.volume_sent * data.opening_rate)
        data.click_through = Math.round(data.click_rate * data.email_open)
        data.expexcted_conversion = Math.round(data.conversion_rate * data.click_through)
        data.gross_revenue = data.average_revenue * data.expexcted_conversion
        data.profit = data.gross_revenue - data.campaign_cost
        data.eroi = (data.profit / data.campaign_cost) * 100
        data.conversion_even = data.campaign_cost / data.average_revenue
        data.cost_email_open = data.campaign_cost / data.email_open
        data.cost_email_lead = data.campaign_cost / data.click_through
        data.cost_conversion = data.campaign_cost / data.expexcted_conversion

        return data
    },
    setData: function (data) {
        console.log(data)
        $('#gross_revenue').html(
            WROI.formatCurrencyField(data.gross_revenue, data.currency)
        )
        $('#profit').html(WROI.formatCurrencyField(data.profit, data.currency))
        $('#eroi').html(Math.ceil(data.eroi) + '%')
        $('#conversion_even').html(Math.ceil(data.conversion_even))
        $('#cost_email_open').html(
            WROI.formatCurrencyField(data.cost_email_open, data.currency)
        )
        $('#cost_email_lead').html(
            WROI.formatCurrencyField(data.cost_email_lead, data.currency)
        )
        $('#cost_conversion').html(
            WROI.formatCurrencyField(data.cost_conversion, data.currency)
        )
        $('#email_open').html(WROI.formatNumberField(data.email_open))
        $('#click_through').html(WROI.formatNumberField(data.click_through))
        $('#expexcted_conversion').html(WROI.formatNumberField(data.expexcted_conversion))
        $('.currency_symbol').html(data.currency_symbol)
    },

    format_number: function (data, points) {
        return data.toFixed(points).replace(/(\d)(?=(\d{3})+\.)/g, '$1,')
    },

    formatCurrencyField: function (val, currency) {
        val = ''.concat(val).replace(/,/g, '.')
        var formated_val = new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: currency,
        }).format(val)
        return formated_val
    },

    formatNumberField: function (val) {
        var formated_val = new Intl.NumberFormat('de-DE', {}).format(val)
        return formated_val
    },

    getNumericValue: function (val) {
        var a = ''.concat(val).replace(/,/g, '.'),
            i = parseFloat(a.replace(/(\s)/g, ''))
        return WROI.isNaN(i) ? 0 : i
    },

    isNaN: function (val) {
        return Number.isNaN(val) || 'NaN' === val
    },
}
