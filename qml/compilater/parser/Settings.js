module.exports.Settings = function ( lexem, JST ) {
        let onOff = lexem.settings.split(':')[1].replaceAll(/\n/g, ';').split(';')[0].replaceAll(/\n/g, '').replaceAll(/\s/g, '');
        if(onOff != 'on' && onOff != 'off') {JST = `${JST}throw new Error('|  ${lexem.settings}  | --> In the settings, you can specify only on/off');`
        return [ lexem, JST ]}
        (onOff === 'on') ? onOff = true : onOff = false
        var Settings = new Object(null);
        if(lexem.settings.split('ErrorMessages:')[1]) Settings.ErrorMessages = onOff
        if(lexem.settings.split('WarningMessages:')[1]) Settings.WarningMessages = onOff

        return [ lexem, JST ]
}