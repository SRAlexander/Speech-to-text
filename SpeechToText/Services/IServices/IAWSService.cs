﻿using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Services.Models;

namespace Services.IServices
{
    public interface IAWSService
    {
        Task<SpeechRecognitionResult> ParseSpeectToText(string[] args);
    }
}